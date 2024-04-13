const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Potencia extends Expresion{
    
    constructor(expIzq, expDer, fila, columna){
        super("Error", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
        this.expDer = expDer;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('POTENCIA');
        nodo.agregarHijo("POW");
        nodo.agregarHijo("(");
        nodo.agregarHijoAST(this.expIzq.getNodo());
        nodo.agregarHijo(",");
        nodo.agregarHijoAST(this.expDer.getNodo());
        nodo.agregarHijo(")");
        return nodo;
    }

    
    interpretar(entorno,tablaDeSimbolos,sb){
        let valorDer = this.expDer.interpretar(entorno,tablaDeSimbolos,sb);
        let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);
    
        if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
            this.tipo = 'INT';
            this.valor = valorIzq ** valorDer;
            //console.log(this.valor);
            return this.valor;
        }
        //DOUBLE -INT
        else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
            (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq ** valorDer;
            //console.log(this.valor);
            return this.valor;
        } //INT - CHAR
        else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") ) {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq ** valorDer;
            return this.valor;
        }else{
            console.log("Error Semántico: POW(a,b) - recuerde que ambos valores deben DOUBLE/INT");
            sb.append("\n");
            sb.append("Error Semántico: POW(a,b) - recuerde que ambos valores deben DOUBLE/INTs");
            sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }
        
    }

}

module.exports = Potencia;