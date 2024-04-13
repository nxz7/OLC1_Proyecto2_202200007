const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class If extends Instruccion{
    constructor(condicion, instr_if, fila, columna){
        super(TipoInstr.IF, fila, columna);
        this.condicion = condicion;
        this.instr_if = instr_if;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('IF');
        nodo.agregarHijo('IF');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo('{');
        
        this.instr_if.forEach(instruccion => {
            nodo.agregarHijoAST(instruccion.getNodo());
        });

        nodo.agregarHijo('}');
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        let entornoIf = new Entorno(TipoInstr.IF, entorno);
        console.log("entornoIf: ", entornoIf);
        console.log("entornoANTERIOR: ", entorno);
        this.condicion.interpretar(entornoIf,tablaDeSimbolos,sb,tablaFunciones);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion del if debe ser tipo boolean");
            sb.append("\n");
            sb.append("Error Semántico: la condicion del if debe ser tipo boolean");
            //this.tipo = "ERROR";
            sb.append("\n");
            return this;
        }
//arreglar esto
        if(String(this.condicion.valor).toLowerCase() === "true"){
            this.instr_if.forEach(instruccion => {
                instruccion.interpretar(entornoIf,tablaDeSimbolos,sb,tablaFunciones);
            });
        }
        else{
            // Ejecución del else If o else
        }
        // Guardar entorno
        return this;
    }

}

module.exports = If