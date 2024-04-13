const { Expresion, TipoDato } = require("../Expresion");

const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const Dato = require("./Dato.js");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class id extends Expresion{
    constructor(id,  fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('ID');
        nodo.agregarHijo(this.id);
        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){

        //let valor=this.expresion.interpretar(entorno,tablaDeSimbolos);
        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
        //console.log("ENCONTRADA: ", encontrada);
        if (encontrada!= null){
                let dato = new Dato(encontrada.valor, encontrada.tipo, this.fila, this.columna)
                this.tipo = encontrada.tipo;
                this.valor = encontrada.valor;
                console.log("--------ACA----------------");
                console.log(this.valor);
                console.log(this);
                return this.valor;
            }
        else {
            console.log("Error semántico: la variable no existe");
            sb.append("\n");
            sb.append("Error semántico: la variable no existe");
            sb.append("\n");
            return this;
        }
    }
}

module.exports = id;