const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class TypeOf extends Expresion{
    
    constructor(id, fila, columna){
        super("Error", TipoDato.ERROR, fila, columna);
        this.id = id;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('Type Of');
        nodo.agregarHijo("typeof");
        nodo.agregarHijo("(");
        nodo.agregarHijo(this.id);
        nodo.agregarHijo(")");
        //nodo.agregarHijo(";");

        return nodo;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        //let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);

        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
console.log("ENCONTRADA: ", encontrada);

    try {
        if(encontrada != null){
            this.tipo = "STD::STRING";
            this.valor = encontrada.tipo;
            return this.valor;
        }
        else{
            console.log("Error Semántico: el simbolo no existe, no se puede devolver el tipo");
            sb.append("\n");
            sb.append("Error Semántico: el simbolo no existe, no se puede devolver el tipo");
            sb.append("\n");
            this.tipo=TipoDato.ERROR;
            return this;
        }
        
    } catch (error) {
        sb.append("\n");
            sb.append("Error Semántico: en la funcion toUPPER");
            sb.append("\n");
    }

    }

}

module.exports = TypeOf;