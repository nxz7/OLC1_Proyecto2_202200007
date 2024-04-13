const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class IncDec extends Expresion{
    
    constructor(expresion, operador, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
        this.operador = operador;
    }


    getNodo() {
        let nodo = new NodoAst_1.NodoAst('INC-DEC (expr)');
        nodo.agregarHijoAST(this.expresion.getNodo());
        nodo.agregarHijo(this.operador);
        return nodo;
    }
    
    interpretar(entorno,tablaDeSimbolos,sb){
        let expresion = this.expresion.interpretar(entorno,tablaDeSimbolos,sb);



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
                sb.append("\n");
                sb.append("Error Semántico: [++]TIENE QUE SER VARIABLE NUMERICA");
                sb.append("\n");
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
                console.log("Error Semántico: [--]TIENE QUE SER VARIABLE NUMERICA");
                sb.append("\n");
                sb.append("Error Semántico: [--]TIENE QUE SER VARIABLE NUMERICA");
                sb.append("\n");
                return this.valor;
            }
        }
        else{
            console.log("Error Semántico: al usar INC/DEC - recuerde que se suma o resta, por lo que solo var numericas");
            sb.append("\n");
            sb.append("error semantico: al usar INC/DEC - recuerde que se suma o resta, por lo que solo var numericas");
            sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

module.exports = IncDec;