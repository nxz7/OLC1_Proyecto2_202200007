const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class toString extends Expresion{
    
    constructor(expIzq, fila, columna){
        super("Error", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('toString');
        nodo.agregarHijo("std::toString");
        nodo.agregarHijo("(");
        nodo.agregarHijoAST(this.expIzq.getNodo());
        nodo.agregarHijo(")");
        //nodo.agregarHijo(";");

        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);

    try {
            this.tipo = 'STD::STRING';
            this.valor = valorIzq.toString();
            return this.valor;
        
    } catch (error) {
        this.tipo=TipoDato.ERROR;
            
        sb.append("\n");
            sb.append("Error Semántico: en la funcion toUPPER");
            sb.append("\n");
            return this;
    }

    }

}

module.exports = toString;