const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class FOR extends Instruccion{
    constructor(declaracion,condicion,actualizacion, instr_for, fila, columna){
        super(TipoInstr.FOR, fila, columna);
        this.declaracion = declaracion;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.instr_for = instr_for;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('FOR');
        nodo.agregarHijo('FOR');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.declaracion.getNodo());
        nodo.agregarHijo(';');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(';');
        nodo.agregarHijoAST(this.actualizacion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        
        this.instr_for.forEach(instruccion => {
            nodo.agregarHijoAST(instruccion.getNodo());
        });

        nodo.agregarHijo('}');


        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        let entornoFor = new Entorno(TipoInstr.FOR, entorno);
        console.log("entornoIf: ",entornoFor);
        console.log("entornoANTERIOR: ", entorno);
        this.declaracion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones);
        this.condicion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones);
        this.actualizacion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion del FOR debe ser tipo boolean");
            sb.append("\n");
            sb.append("Error Semántico: la condicion del FOR debe ser tipo boolean");
            //this.tipo = "ERROR";
            sb.append("\n");
            return this;
        }

        try {
        for (this.declaracion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones); String(this.condicion.valor).toLowerCase() === "true"; this.actualizacion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones)) {
            this.instr_for.forEach(instruccion => {
                instruccion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones);
                this.condicion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones);
            });

            
            
                //this.actualizacion.interpretar(entornoFor,tablaDeSimbolos,sb,tablaFunciones);
            
        }
        tablaDeSimbolos.removerRecientesPorEntorno(entornoFor.nombre);
    } catch (error) {
        console.log("ERROR SEMANTICO");
        sb.append("\n");
        sb.append("ERROR SEMANTICO >>> for");
        sb.append("\n");
    }


        return this;
    }

}

module.exports = FOR;