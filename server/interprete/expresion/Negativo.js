const { Expresion, TipoDato } = require("../Expresion");

class Negativo extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno,tablaDeSimbolos){

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

        console.log("Error Semántico: Error con el negativo [-] ")
        return this;
    }

}

module.exports = Negativo;