const { Expresion, TipoDato } = require("../Expresion");

const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const Dato = require("./Dato.js");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Mod_id extends Expresion{
    constructor(id,expresion,  fila, columna){
        super("ERROR", "MOD", fila, columna);
        this.id = id;
        this.expresion = expresion;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('MODIFICAR_ID');
        nodo.agregarHijo(this.id);
        nodo.agregarHijo("=");
        //console.log("EXPRESION ACA: "+this.expresion);
        nodo.agregarHijoAST(this.expresion.getNodo());
        nodo.agregarHijo(";");
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        
        let valor = this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
        console.log("VALOR ACA: "+valor);
        //let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
        let index = tablaDeSimbolos.getSimboloIndex(this.id,entorno);
        
            console.log("INDEX ACA: "+index);
            console.log("tipo: "+this.expresion);

        if (index!=null || index != -1){
            let valorSi = Number(valor)
            this.tipo = this.expresion.tipo;
            this.valor = valorSi;
            tablaDeSimbolos.actualizarValor(index, valorSi);
            return this;
        }else{
            sb.append("error semantico: modificar variable");

        }


    }
}

module.exports = Mod_id;