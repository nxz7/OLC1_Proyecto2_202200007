const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo } = require("../entorno/Simbolo");

class Variable extends Instruccion{
    constructor(id, tipo, expresion, fila, columna){
        super(TipoInstr.DECLARAR, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    interpretar(entorno){
        //console.log("Declarar: ", this.id);
        //console.log("Tipo: ", this.tipo);
        //console.log("Expresion: ", this.expresion);
        this.expresion.interpretar(entorno);

        if(this.expresion.tipo != this.tipo){
            console.log("Error semántico: el tipo de la variable no coincide con el tipo de la expresión");
            return this;
        }

        entorno.addSimbolo(this.id, this.expresion, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);

        return this;
    }
}

module.exports = Variable;