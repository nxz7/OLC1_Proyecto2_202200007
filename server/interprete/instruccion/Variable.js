const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const StringBuilder = require('../StringBuilder.js');

const simb = require('../Simbolos/simb.js');

class Variable extends Instruccion{
    constructor(id, tipo, expresion, fila, columna){
        super(TipoInstr.VARIABLE, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){

        let valor=this.expresion.interpretar(entorno,tablaDeSimbolos,sb);
        //console.log("1");
        if(this.expresion.tipo != this.tipo){
            console.log("Error semántico: el tipo de la variable no coincide con el tipo de la expresión");
            sb.append("\n");
            sb.append("Error semántico: el tipo de la variable no coincide con el tipo de la expresión");
            sb.append("\n");
            
            return this;
        }
        //console.log("VALOR: ", valor);
        entorno.addSimbolo(this.id, valor, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
        //entorno.printEntorno();
        let variable_ag = new simb(this.id, valor, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna, entorno.nombre);
        tablaDeSimbolos.agregarSimbolo(variable_ag);


        return this;
    }
}

module.exports = Variable;