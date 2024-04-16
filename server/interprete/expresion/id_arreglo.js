const { Expresion, TipoDato } = require("../Expresion");

const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const Dato = require("./Dato.js");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class id_arreglo extends Expresion{
    constructor(id,index1,index2,  fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
        this.index1 = index1;
        this.index2 = index2;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('ID_arreglo');
        nodo.agregarHijo(this.id);
        if (this.index2 == null && this.index1 != null){
            nodo.agregarHijo('[');
            nodo.agregarHijoAST(this.index1.getNodo());
            nodo.agregarHijo(']');
        }else if(this.index2 != null && this.index1 != null){
            nodo.agregarHijo('[');
            nodo.agregarHijoAST(this.index1.getNodo());
            nodo.agregarHijo(']');
            nodo.agregarHijo('[');
            nodo.agregarHijoAST(this.index2.getNodo());
            nodo.agregarHijo(']');
        }
        nodo.agregarHijo(";");
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb){
        //console.log(this.index1);
        //console.log(this.index2);
        let index1=this.index1.interpretar(entorno,tablaDeSimbolos,sb);
        index1=parseFloat(index1);
        console.log("index1ACA:"+index1);

        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);

        if (encontrada!= null && this.index2 == null && this.index1 != null){
            //int_valor =[];
            console.log(encontrada.valor);
            let valor =encontrada.valor[Number(index1)];
            console.log(">>>>>>>>>"+ encontrada.valor[index1]);
            let int_valor=encontrada.valor;
            index1=+index1;
            console.log("index1:"+index1);
            let dato = new Dato(int_valor[index1], encontrada.tipo, this.fila, this.columna)
            this.tipo = dato.tipo;
            //console.log(">>>"+valor+"<<<");
            if (this.tipo == "Double"||this.tipo == "INT"){
                dato.valor=parseFloat(dato.valor);
            } 
            //console.log(dato);
            this.valor = dato.valor;
            console.log("dato del valorUNO:"+this.valor+"----");
            console.log(this.valor);
            return this.valor;
            }
        else if (encontrada!= null && this.index2 != null && this.index1 != null){
            let index2=this.index2.interpretar(entorno,tablaDeSimbolos,sb);
            //console.log(encontrada.valor[index1][index2]);
            let valor =encontrada.valor[index1][index2];
            let dato = new Dato(encontrada.valor[index1][index2], encontrada.tipo, this.fila, this.columna)
            this.tipo = dato.tipo;
            if (this.tipo == "DOUBLE"||this.tipo == "INT"){
                dato.valor=parseFloat(dato.valor);
            }
            this.valor = dato.valor;
            console.log("dato del valor:"+this.valor+"----");
            
            return this.valor;
        }    
        else {
            console.log("Error semántico: no hay index proporcionado valido");
            sb.append("\n");
            sb.append("Error semántico: no hay index proporcionado valido");
            sb.append("\n");
            return this;
        }
    }
}

module.exports = id_arreglo;