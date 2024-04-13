const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Not extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }


    getNodo() {
        let nodo = new NodoAst_1.NodoAst('NOT[!]');
        nodo.agregarHijo("!");
        nodo.agregarHijoAST(this.expresion.getNodo());
        
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb){

        let valor = this.expresion.interpretar(entorno,tablaDeSimbolos,sb);
        console.log("tipozz: ", this.expresion.tipo);


        if(this.expresion.tipo === "BOOL"){
            this.tipo = TipoDato.BOOLEAN;
            this.valor = !valor;
            //console.log("tipo: ", this.valor);
            return this.valor;
        }
        else{
            console.log("Error Semántico: Error con el NOT - recurde valores booleanos ");
            sb.append("\n");
                sb.append("Error Semántico: Error con el NOT - recurde valores booleanos ");
                sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

module.exports = Not;