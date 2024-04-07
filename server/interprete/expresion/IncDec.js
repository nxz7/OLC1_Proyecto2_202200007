const { Expresion, TipoDato } = require("../Expresion");

class IncDec extends Expresion{
    
    constructor(expresion, operador, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
        this.operador = operador;
    }

    interpretar(entorno,tablaDeSimbolos){
        let expresion = this.expresion.interpretar(entorno,tablaDeSimbolos);



        if(this.operador == "++"){
            if(this.expresion.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = expresion+1;
                
                console.log("valor: ", this.valor);
                return Number(this.valor);
            }
            //DOUBLR 
            else if (this.expresion.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = expresion+1;
                console.log("valor: ", this.valor);
                return parseFloat(this.valor);
            } 
            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: [++]TIENE QUE SER VARIABLE NUMERICA");
                return this.valor;
            }

        }
        else if(this.operador == "--"){

            if(this.expresion.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = expresion-1;
                console.log("valor: ", this.valor);
                return Number(this.valor);
            }
            //DOUBLR 
            else if (this.expresion.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = expresion-1;
                console.log("valor: ", this.valor);
                return parseFloat(this.valor);
            } 
            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: [++]TIENE QUE SER VARIABLE NUMERICA");
                return this.valor;
            }
        }
        else{
            console.log("Error Semántico: al usar INC/DEC - recuerde que se suma o resta, por lo que solo var numericas")
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

module.exports = IncDec;