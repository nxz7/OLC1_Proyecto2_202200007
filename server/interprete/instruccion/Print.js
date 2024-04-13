const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Print extends Instruccion{

    constructor(expresion,salto, fila, columna){
        super(TipoInstr.PRINT, fila, columna);
        this.expresion = expresion;
        this.salto = salto;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('COUT');
        nodo.agregarHijo('<<');

        nodo.agregarHijoAST(this.expresion.getNodo());
        if (this.salto == "salto") {
            nodo.agregarHijo('<<');
            nodo.agregarHijo('endl');
            nodo.agregarHijo(';');
        }
        else {
            nodo.agregarHijo(';');
        }

        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones) {
        try {
            let valor = this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
    
            if (this.expresion.tipo == "ERROR") {
                console.log("Error Semántico >>>> intentar imprimir un error");
                sb.append("\n");
                sb.append("Error Semántico >>>> intentar imprimir un error");
                sb.append("\n");
                return;
            }
            console.log(valor);
            if (this.salto == "salto"){
                sb.append(valor);
                sb.append("\n");

            }else{
            sb.append(valor);
            }
        } catch (error) {
            console.error("ERROR", error);
            console.log("aca");
        }
    }
    

}

module.exports = Print;