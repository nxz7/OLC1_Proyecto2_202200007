const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class do_while extends Instruccion{
    constructor(condicion, instr_while, fila, columna){
        super(TipoInstr.DOWHILE, fila, columna);
        this.condicion = condicion;
        this.instr_while = instr_while;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('DO_WHILE');
        nodo.agregarHijo('DO');
        nodo.agregarHijo('{');
        
        this.instr_while.forEach(instruccion => {
            nodo.agregarHijoAST(instruccion.getNodo());
        });

        nodo.agregarHijo('}');
        nodo.agregarHijo('WHILE');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(')');
        nodo.agregarHijo(';');

        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        let entornoDOWhile = new Entorno(TipoInstr.DOWHILE, entorno);
        console.log("entornoIf: ", entornoDOWhile);
        console.log("entornoANTERIOR: ", entorno);
        this.condicion.interpretar(entornoDOWhile,tablaDeSimbolos,sb,tablaFunciones);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion del DO WHILE debe ser tipo boolean");
            sb.append("\n");
            sb.append("Error Semántico: la condicion del DO WHILE debe ser tipo boolean");
            //this.tipo = "ERROR";
            sb.append("\n");
            return this;
        }
try {
        do {
            this.instr_while.forEach(instruccion => {
                instruccion.interpretar(entornoDOWhile,tablaDeSimbolos,sb,tablaFunciones);
                
            });
            this.condicion.interpretar(entornoDOWhile,tablaDeSimbolos,sb,tablaFunciones);
        } while (String(this.condicion.valor).toLowerCase() === "true");
        
    } catch (error) {
        console.log("ERROR SEMANTICO");
        sb.append("\n");
        sb.append("ERROR SEMANTICO >>> DO WHILE");
        sb.append("\n");
    }
        return this;
    }

}

module.exports = do_while;