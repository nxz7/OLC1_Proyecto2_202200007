const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Switch extends Instruccion{
    constructor(valor,casos, intr_casos, fila, columna){
        super(TipoInstr.SWITCH, fila, columna);
        this.valor = valor;
        this.casos = casos;
        this.intr_casos = intr_casos;
        //this.instr_for = instr_for;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('Switch');
        nodo.agregarHijo('switch');
        nodo.agregarHijo('(');
        nodo.agregarHijoAST(this.valor.getNodo());
        nodo.agregarHijo(')');
        
        nodo.agregarHijo('{');
        
        for (let i = 0; i < this.casos.length; i++) {
            nodo.agregarHijo('case');
            nodo.agregarHijoAST(this.casos[i].getNodo());
            nodo.agregarHijo(':');
            inst_caso[i].forEach((inst) => {
                nodo.agregarHijoAST(inst.getNodo());
            });
        }

        nodo.agregarHijo('}');


        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        let entornoSwitch = new Entorno(TipoInstr.SWITCH, entorno);
        let valS = this.valor.interpretar(entornoSwitch, tablaDeSimbolos, sb, tablaFunciones);
        
        let index = -1;
        for (let i = 0; i < this.casos.length; i++) {
            let casVal = this.casos[i].interpretar(entornoSwitch, tablaDeSimbolos, sb, tablaFunciones);
            if (casVal === valS) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            const inst_caso = this.intr_casos[index]; 
            for (const inst of inst_caso) {
                inst.interpretar(entornoSwitch, tablaDeSimbolos, sb, tablaFunciones);
            }
        } else {
            console.log("ERROR SEMANTICO EN SWITCH.");
            sb.append("\n");
            sb.append("ERROR SEMANTICO EN SWITCH.");
            sb.append("\n");
        }

        return this;
    }

}

module.exports = Switch;