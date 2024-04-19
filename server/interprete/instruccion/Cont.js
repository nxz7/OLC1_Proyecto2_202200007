const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const NodoAst_1 = require("../Simbolos/NodoAst");

class Cont extends Instruccion{
    constructor(fila, columna){
        super(TipoInstr.CONTINUE, fila, columna);
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('CONTINUE');
        nodo.agregarHijo('CONTINUE');
        nodo.agregarHijo(';');

        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        return this;
    }

}

module.exports = Cont