const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');

class Negativo extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno,tablaDeSimbolos,sb){

        this.expresion.interpretar(entorno,tablaDeSimbolos);



        if(this.expresion.tipo === "INT"){
            this.tipo = TipoDato.INT;
            this.valor = -1 * this.expresion.valor;
            //console.log("tipo: ", this.tipo);
            return Number(this.valor);
        }
        if(this.expresion.tipo === "DOUBLE"){
            this.tipo = TipoDato.DOUBLE;
            this.valor = -1.0 * this.expresion.valor;
            //console.log("tipo: ", this.tipo);
            return parseFloat(this.valor);
        }

        console.log("Error Semántico: Error con el negativo [-] ");
        sb.append("\n");
                sb.append("Error Semántico: Error con el negativo [-] ");
                sb.append("\n");
        return this;
    }

}

module.exports = Negativo;