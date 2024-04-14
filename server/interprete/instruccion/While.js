const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class While extends Instruccion{
    constructor(condicion, instr_while, fila, columna){
        super(TipoInstr.WHILE, fila, columna);
        this.condicion = condicion;
        this.instr_while = instr_while;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('WHILE');
        nodo.agregarHijo('while');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        
        this.instr_while.forEach(instruccion => {
            nodo.agregarHijoAST(instruccion.getNodo());
        });

        nodo.agregarHijo('}');


        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        try {
        let entornoWhile = new Entorno(TipoInstr.WHILE, entorno);
        console.log("entornoIf: ", entornoWhile);
        console.log("entornoANTERIOR: ", entorno);
        this.condicion.interpretar(entornoWhile,tablaDeSimbolos,sb,tablaFunciones);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion del WHILE debe ser tipo boolean");
            sb.append("\n");
            sb.append("Error Semántico: la condicion del WHILE debe ser tipo boolean");
            //this.tipo = "ERROR";
            sb.append("\n");
            return this;
        }

        while(String(this.condicion.valor).toLowerCase() === "true"){
            this.instr_while.forEach(instruccion => {
                instruccion.interpretar(entornoWhile,tablaDeSimbolos,sb,tablaFunciones);
                this.condicion.interpretar(entornoWhile,tablaDeSimbolos,sb,tablaFunciones);
            });
        }

        return this;

    } catch (error) {
        console.log("ERROR SEMANTICO");
        sb.append("\n");
        sb.append("ERROR SEMANTICO >>> DO WHILE");
        sb.append("\n");
    }
    }

}

module.exports = While