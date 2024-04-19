const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const NodoAst_1 = require("../Simbolos/NodoAst");

class Break extends Instruccion{
    constructor(fila, columna){
        super(TipoInstr.BREAK, fila, columna);
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('BREAK');
        nodo.agregarHijo('break');
        nodo.agregarHijo(';');

        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        return this;
    }

}

module.exports = Break