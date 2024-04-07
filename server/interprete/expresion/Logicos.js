const { Expresion, TipoDato } = require("../Expresion");

class Logico extends Expresion{
    
    constructor(expIzq, operador, expDer, fila, columna){
        super("BOOL", TipoDato.BOOLEAN, fila, columna);
        this.expIzq = expIzq;
        this.expDer = expDer;
        this.operador = operador;
    }

    interpretar(entorno,tablaDeSimbolos){
        let expDer = this.expDer.interpretar(entorno,tablaDeSimbolos);
        let expIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos);
    


        if(this.operador == "&&"){
            if (this.expDer.tipo=="BOOL" && this.expIzq.tipo=="BOOL" ) {
                let resultado = expIzq && expDer;
                return resultado;
            }
            else{
                console.log("Error Semántico: dentro operador logico && - recuerde ambas exp debe dar un resultado booleano (true/false)")
                this.tipo=TipoDato.ERROR;
                return this;
            }
            
        }
        else if(this.operador == "||"){
            if (this.expDer.tipo=="BOOL" && this.expIzq.tipo=="BOOL" ) {
                let resultado = expIzq || expDer;
                return resultado;
            }
            else{
                console.log("Error Semántico: dentro operador logico || - recuerde ambas exp debe dar un resultado booleano (true/false)")
                this.tipo=TipoDato.ERROR;
                return this;
            }
        }
        else{
            console.log("Error Semántico: dentro operador logico - recuerde ambas exp debe dar un resultado booleano (true/false)")
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

module.exports = Logico;