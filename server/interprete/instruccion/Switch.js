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
        console.log("entornoSwitch: ", entorno);

        return this;
    }

}

module.exports = Switch;