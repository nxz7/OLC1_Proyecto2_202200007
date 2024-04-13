const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class If extends Instruccion{
    constructor(condicion, instr_if, else_if,cond_elseIf,instr_else,cond_else, fila, columna){
        super(TipoInstr.IF, fila, columna);
        this.condicion = condicion;
        this.instr_if = instr_if;
        this.else_if = else_if;
        this.cond_elseIf=cond_elseIf;
        this.instr_else=instr_else;
        this.cond_else=cond_else;
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

        if (this.cond_elseIf!=null){
            nodo.agregarHijo('ELSE IF');
            nodo.agregarHijo('(');
            nodo.agregarHijoAST(this.cond_elseIf.getNodo());
            nodo.agregarHijo(')');
            nodo.agregarHijo('{');
            
            this.else_if.forEach(instruccion => {
                nodo.agregarHijoAST(instruccion.getNodo());
            });
            nodo.agregarHijo('}');
        }

        if (this.cond_else!=null){
            nodo.agregarHijo('ELSE');
            nodo.agregarHijo('{');
            
            this.instr_else.forEach(instruccion => {
                nodo.agregarHijoAST(instruccion.getNodo());
            });
            nodo.agregarHijo('}');
        }


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
        else if (this.else_if!=null && String(this.cond_elseIf.valor).toLowerCase() === "true"){
            let entornoIf_Else = new Entorno(TipoInstr.IF_ELSE, entorno);
            console.log(entornoIf_Else.anterior.nombre);

            this.else_if.forEach(instruccion => {
                instruccion.interpretar(entornoIf_Else,tablaDeSimbolos,sb,tablaFunciones);
            });

        }else if (this.cond_else!=null){
            let entorno_Else = new Entorno(TipoInstr.ELSE, entorno);
            console.log(entorno_Else.anterior.nombre);

            this.instr_else.forEach(instruccion => {
                instruccion.interpretar(entorno_Else,tablaDeSimbolos,sb,tablaFunciones);
            });

        }
        // Guardar entorno
        return this;
    }

}

module.exports = If