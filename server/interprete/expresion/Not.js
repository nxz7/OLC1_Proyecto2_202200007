const { Expresion, TipoDato } = require("../Expresion");

class Not extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno,tablaDeSimbolos){

        let valor = this.expresion.interpretar(entorno,tablaDeSimbolos);
        //console.log("tipozz: ", this.expresion.tipo);


        if(this.expresion.tipo === "BOOL"){
            this.tipo = TipoDato.BOOLEAN;
            this.valor = !valor;
            //console.log("tipo: ", this.valor);
            return this.valor;
        }
        else{
            console.log("Error Semántico: Error con el NOT - recurde valores booleanos ")
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

module.exports = Not;