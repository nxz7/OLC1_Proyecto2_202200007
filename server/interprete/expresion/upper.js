const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class upper extends Expresion{
    
    constructor(expIzq, fila, columna){
        super("Error", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('UPPER');
        nodo.agregarHijo("toUPPER");
        nodo.agregarHijo("(");
        nodo.agregarHijoAST(this.expIzq.getNodo());
        nodo.agregarHijo(")");
        //nodo.agregarHijo(";");

        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);

    try {
        if(this.expIzq.tipo == "STD::STRING"){
            this.tipo = 'STD::STRING';
            this.valor = valorIzq.toUpperCase();
            return this.valor;
        }
        else{
            console.log("Error Semántico: la funcion to UPPER solo funciona con STD::STRING");
            sb.append("\n");
            sb.append("Error Semántico: la funcion to UPPER solo funciona con STD::STRING");
            sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }
        
    } catch (error) {
        sb.append("\n");
            sb.append("Error Semántico: en la funcion toUPPER");
            sb.append("\n");
    }

    }

}

module.exports = upper;