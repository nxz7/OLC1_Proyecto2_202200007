const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');

class Negativo extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
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