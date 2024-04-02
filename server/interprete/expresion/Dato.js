const {Expresion} = require("../Expresion.js")

class Dato extends Expresion{
    constructor(valor, tipo,linea, columna){
        super(valor, tipo,linea, columna);
        //this.tipo = tipo;
        //this.valor = valor;
        //this.linea = linea;
        //this.columna = columna;
    }

    interpretar(entorno){
        switch(this.tipo){
            case 'INT': return Number(this.valor);
            case 'STD::STRING': return this.valor;
            case 'DOUBLE':return parseFloat(this.valor);
            case 'CHAR': return this.valor;
            case 'ERROR': return this.valor;
            case 'BOOL':
                    let lowerCaseValue = this.valor.toLowerCase();
                    if (lowerCaseValue === 'true') {
                        return this.valor = true;
                    } else if (lowerCaseValue === 'false') {
                        return this.valor = false;
                    } else {
                        throw new Error("Error Semántico -> VALOR BOOLEANO NO VALIDO: " + this.valor);
                    }
                    break;



        }
    }

}

module.exports = Dato;