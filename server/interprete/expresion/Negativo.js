const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Negativo extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('NEGATIVO[-]');
        nodo.agregarHijo("-");
        nodo.agregarHijoAST(this.expresion.getNodo());
        
        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){

        let exp = this.expresion.interpretar(entorno,tablaDeSimbolos,sb);


        if(this.expresion.tipo === "INT"){
            this.tipo = TipoDato.INT;
            this.valor = -1 * exp;
            return Number(this.valor);
        }
        else if(this.expresion.tipo === "DOUBLE"){
            this.tipo = TipoDato.DOUBLE;
            this.valor = -1.0 * exp;
            return parseFloat(this.valor);
        }else {

        console.log("Error Semántico: Error con el negativo [-] ");
        sb.append("\n");
                sb.append("Error Semántico: Error con el negativo [-] ");
                sb.append("\n");
        return this;}
    }

}

module.exports = Negativo;