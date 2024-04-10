const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');

class Casteos extends Expresion{
    
    constructor(expIzq, tipoCasteo, fila, columna){
        super("Error", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
        this.tipoCasteo = tipoCasteo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);

    
        if(this.expIzq.tipo == "INT" && this.tipoCasteo == "DOUBLE"){
            this.tipo = 'DOUBLE';
            this.valor = parseFloat(valorIzq);
            return this.valor;
        }else if (this.expIzq.tipo == "DOUBLE" && this.tipoCasteo == "INT"){
            let integer = Math.floor(valorIzq);
            this.tipo = 'INT';
            this.valor = integer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "INT" && this.tipoCasteo == "STD::STRING"){
            let stringNumber = valorIzq.toString();
            this.tipo = 'STD::STRING';
            this.valor = stringNumber;
            return this.valor;
        }
        else if (this.expIzq.tipo == "INT" && this.tipoCasteo == "CHAR"){
            this.tipo = 'CHAR';
            this.valor = String.fromCharCode(valorIzq);
            return this.valor;
        }
        else if (this.expIzq.tipo == "DOUBLE" && this.tipoCasteo == "STD::STRING"){
            let stringNumber = valorIzq.toString();
            this.tipo = 'STD::STRING';
            this.valor = stringNumber;
            return this.valor;
        }
        else if (this.expIzq.tipo == "CHAR" && this.tipoCasteo == "INT"){
            let intNumber = valorIzq.charCodeAt(0);
            this.tipo = 'INT';
            this.valor = intNumber;
            return Number(this.valor);
        }
        else if (this.expIzq.tipo == "CHAR" && this.tipoCasteo == "DOUBLE"){
            let iNumber = valorIzq.charCodeAt(0);
            this.tipo = 'DOUBLE';
            this.valor = iNumber;
            return parseFloat(this.valor);
        }
        else{
            console.log("Error Semántico: no cumple con los casteos permitidos");
            sb.append("\n");
            sb.append("Error Semántico: no cumple con los casteos permitidos");
            sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }
        
    }

}

module.exports = Casteos;