const { Expresion, TipoDato } = require("../Expresion");

const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const Dato = require("./Dato.js");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class CSTR extends Expresion{
    constructor(id,  fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('C_STR');
        
        nodo.agregarHijo(this.id);
        nodo.agregarHijo(".");
        nodo.agregarHijo("C_STR");
        nodo.agregarHijo("(");
        nodo.agregarHijo(")");
        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        try{
        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
        //console.log("ENCONTRADA: ", encontrada);
        if (encontrada!= null && encontrada.tipo == "STD::STRING"){
                let dato = new Dato(encontrada.valor, encontrada.tipo, this.fila, this.columna)
                this.tipo = "STD::STRING";
                let arreglo_res = stringToArray(encontrada.valor);
                this.valor = arreglo_res;
                console.log(this.valor);
                return this.valor;
            }
        else {
            console.log("Error Semántico: en la funcion c_str");
            sb.append("\n");
            sb.append("Error Semántico: en la funcion c_str");
            sb.append("\n");
            return this;
        }

    } catch (error) {
        this.tipo=TipoDato.ERROR;
            
        sb.append("\n");
            sb.append("Error Semántico: en la funcion c_str");
            sb.append("\n");
            return this;
    }

    }
}

module.exports = CSTR;

function stringToArray(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }

    return result;
}