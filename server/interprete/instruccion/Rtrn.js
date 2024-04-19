const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const NodoAst_1 = require("../Simbolos/NodoAst");

class Rtrn extends Instruccion{
    constructor(expresion, fila, columna){
        super(TipoInstr.RETURN, fila, columna);
        this.expresion = expresion;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('RETURN');
        nodo.agregarHijo(' Return');
        if (this.expresion != null || this.expresion != undefined){
        nodo.agregarHijoAST(this.expresion.getNodo());}
        nodo.agregarHijo(';');
        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        console.log("COMO ESTA: ", this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones));
        if (this.expresion == null || this.expresion == undefined){
            console.log("ERROR: La expresion del return no puede ser nula");
            return this;
            
        }
        let regresar = this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
        
        return regresar;

    }
}

module.exports = Rtrn;