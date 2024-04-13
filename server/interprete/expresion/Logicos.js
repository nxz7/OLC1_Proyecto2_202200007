const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Logico extends Expresion{
    
    constructor(expIzq, operador, expDer, fila, columna){
        super("BOOL", TipoDato.BOOLEAN, fila, columna);
        this.expIzq = expIzq;
        this.expDer = expDer;
        this.operador = operador;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('EXPRESION - LOGICA');
        nodo.agregarHijoAST(this.expIzq.getNodo());
        if (this.operador == "&&") {
            nodo.agregarHijo("&&");
        }
        else if (this.operador == "||") {
            nodo.agregarHijo("||");
        }
        nodo.agregarHijoAST(this.expDer.getNodo());
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb){
        let expDer = this.expDer.interpretar(entorno,tablaDeSimbolos,sb);
        let expIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);
    


        if(this.operador == "&&"){
            if (this.expDer.tipo=="BOOL" && this.expIzq.tipo=="BOOL" ) {
                let resultado = expIzq && expDer;
                return resultado;
            }
            else{
                console.log("Error Semántico: dentro operador logico && - recuerde ambas exp debe dar un resultado booleano (true/false)");
                sb.append("\n");
                sb.append("Error Semántico: dentro operador logico && - recuerde ambas exp debe dar un resultado booleano (true/false)");
                sb.append("\n");
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
                console.log("Error Semántico: dentro operador logico || - recuerde ambas exp debe dar un resultado booleano (true/false)");
                sb.append("\n");
                sb.append("Error Semántico: dentro operador logico || - recuerde ambas exp debe dar un resultado booleano (true/false)");
                sb.append("\n");
                this.tipo=TipoDato.ERROR;
                return this;
            }
        }
        else{
            console.log("Error Semántico: dentro operador logico - recuerde ambas exp debe dar un resultado booleano (true/false)");
            sb.append("\n");
                sb.append("Error Semántico: dentro operador logico - recuerde ambas exp debe dar un resultado booleano (true/false)");
                sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }

        
    }

}

module.exports = Logico;