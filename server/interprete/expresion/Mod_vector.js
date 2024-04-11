const { Expresion, TipoDato } = require("../Expresion");

const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const Dato = require("./Dato.js");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');


class Mod_vector extends Expresion{
    constructor(id,index1,index2,expresion,  fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
        this.index1 = index1;
        this.index2 = index2;
        this.expresion = expresion;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        try {
        let valor = this.expresion.interpretar(entorno,tablaDeSimbolos,sb);
        let index1=this.index1.interpretar(entorno,tablaDeSimbolos,sb);
        

        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);

        if (encontrada != null && this.index2 == null && this.index1 != null){
            let valorSi = Number(valor)
            tablaDeSimbolos.actualizarValor1D(this.id, index1, valorSi,entorno);
            
            return this.tipo;
            }
        else if (encontrada!= null && this.index2 != null && this.index1 != null){
            let index2=this.index2.interpretar(entorno,tablaDeSimbolos,sb);
            this.tipo = encontrada.tipo;
            
            tablaDeSimbolos.modificarValor2D(this.id, index1, index2, valor,entorno);

            return this.tipo;
            
        }    
        else {
            console.log("Error semántico: no se encontro la posicion del vector");
            sb.append("\n");
            sb.append("Error semántico: no se encontro la posicion del vector");
            sb.append("\n");
            return this;
        }

    }catch (error) {
            console.error(error.message);
            sb.append("\n");
            sb.append("ERROR SEMANTICO AL MOMENTO DE ACTUALZAR -> MODO PANICO");
            sb.append("\n");
            return this;
        }
    }
}

module.exports = Mod_vector;