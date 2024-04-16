const { Expresion, TipoDato } = require("../Expresion");

const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const Dato = require("./Dato.js");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Length extends Expresion{
    constructor(id,  fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('length');
        
        nodo.agregarHijo(this.id);
        nodo.agregarHijo(".");
        nodo.agregarHijo("length");
        nodo.agregarHijo("(");
        nodo.agregarHijo(")");
        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        //try{
        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
        //console.log("ENCONTRADA: ", encontrada);
        if (encontrada!= null){
                let dato = new Dato(encontrada.valor, encontrada.tipo, this.fila, this.columna)
                this.tipo = "INT";
                let longitud = encontrada.valor.length;
                this.valor = longitud;
                console.log(this.valor);
                return this.valor;
            }
        else {
            console.log("Error semántico: la variable no existe");
            sb.append("\n");
            sb.append("Error semántico: la variable no existe");
            sb.append("\n");
            return this;
        }
/*
    } catch (error) {
        this.tipo=TipoDato.ERROR;
            
        sb.append("\n");
            sb.append("Error Semántico: en la funcion LENGTH");
            sb.append("\n");
            return this;
    }*/

    }
}

module.exports = Length;