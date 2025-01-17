const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Ternario extends Expresion{
    
    constructor(condicion, expTrue, expFalse, fila, columna){
        super("BOOL", TipoDato.BOOLEAN, fila, columna);
        this.condicion = condicion;
        this.expTrue = expTrue;
        this.expFalse = expFalse;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('TERNARIO');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo("?");
        nodo.agregarHijoAST(this.expTrue.getNodo());
        nodo.agregarHijo(",");
        nodo.agregarHijoAST(this.expFalse.getNodo());
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb){
        let expTrue = this.expTrue.interpretar(entorno,tablaDeSimbolos,sb);
        let expFalse = this.expFalse.interpretar(entorno,tablaDeSimbolos,sb);
        let condicion = this.condicion.interpretar(entorno,tablaDeSimbolos,sb);


        if(condicion == true){
            this.tipo = getDataType(expTrue);
            //console.log("tipo: ", this.tipo);
            return expTrue;
        }
        else if(condicion == false){
            this.tipo = getDataType(expFalse);
            //console.log("tipo: ", this.tipo);
            return expFalse;
        }
        else{
            console.log("Error Semántico: dentro operador ternario - recuerde la condicion debe dar un resultado booleano (true/false)")
            sb.append("\n");
            sb.append("Error Semántico: dentro operador ternario - recuerde la condicion debe dar un resultado booleano (true/false)");
            sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

function getDataType(variable) {
    switch (typeof variable) {
        case 'number':
            if (Number.isInteger(variable)) {
                return TipoDato.INT;
            } else {
                return TipoDato.DOUBLE;
            }
        case 'boolean':
            return TipoDato.BOOLEAN;
        case 'string':
            return TipoDato.CADENA;
        case 'object':
            if (Array.isArray(variable)) {
                return TipoDato.ERROR; 
            } else if (variable === null) {
                return TipoDato.ERROR; 
            } else {
                return TipoDato.ERROR; 
            }
        case 'function':
            return TipoDato.ERROR; 
        default:
            return TipoDato.ERROR; 
    }
}

module.exports = Ternario;