const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');

const func = require('../TablaMF/func.js');
const simb = require('../Simbolos/simb.js');

class Metodo extends Instruccion{
    constructor(tipoF, id, instrucciones,fila, columna){
        super(TipoInstr.METODO, fila, columna);
        this.tipoF = tipoF;
        this.id = id;
        this.instrucciones = instrucciones;
        
    }

    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        try {
            let metodo = new func(this.tipoF, this.id, null, this.instrucciones,"METODO",this.fila, this.columna);
            //console.log(funcion);
            tablaFunciones.agregarFuncion(metodo);
            
            console.log("metodo agregada a la tabla de funciones");
            return this;

        } catch (error) {
            sb.append("\n");
            sb.append("Error Semántio al momento de definir el metodo");
            sb.append("\n");
            console.error("An error occurred:", error.message);
            this.tipo = "ERROR";
            return this;
        }
        
        
    }

}

module.exports = Metodo;