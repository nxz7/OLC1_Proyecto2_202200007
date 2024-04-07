const { Expresion, TipoDato } = require("../Expresion");

class Ternario extends Expresion{
    
    constructor(condicion, expTrue, expFalse, fila, columna){
        super("BOOL", TipoDato.BOOLEAN, fila, columna);
        this.condicion = condicion;
        this.expTrue = expTrue;
        this.expFalse = expFalse;
    }

    interpretar(entorno,tablaDeSimbolos){
        let expTrue = this.expTrue.interpretar(entorno,tablaDeSimbolos);
        let expFalse = this.expFalse.interpretar(entorno,tablaDeSimbolos);
        let condicion = this.condicion.interpretar(entorno,tablaDeSimbolos);

        if(condicion == true){
            return expTrue;
        }
        else if(condicion == false){
            return expFalse;
        }
        else{
            console.log("Error Semántico: dentro operador ternario - recuerde la condicion debe dar un resultado booleano (true/false)")
            return this;
        }

        
    }

}

module.exports = Ternario;