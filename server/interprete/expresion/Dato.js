const Instruccion = require("../Instruccion.js");

class Dato extends Instruccion{
    constructor(valor, tipo,linea, columna){
        super();
        this.tipo = tipo;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
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
                        throw new Error("ERROR SEMANTICO -> VALOR BOOLEANO NO VALIDO: " + this.valor);
                    }
                    break;



        }
    }

}

module.exports = Dato;