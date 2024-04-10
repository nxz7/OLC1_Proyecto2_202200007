const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');

const func = require('../TablaMF/func.js');
const simb = require('../Simbolos/simb.js');

class Funcion extends Instruccion{
    constructor(tipoF, id, parametros, instrucciones,fila, columna){
        super(TipoInstr.FUNCION, fila, columna);
        this.tipoF = tipoF;
        this.id = id;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
        
    }

    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        try {
            let funcion = new func(this.tipoF, this.id, this.parametros, this.instrucciones,"FUNCION",this.fila, this.columna);
            //console.log(funcion);
            tablaFunciones.agregarFuncion(funcion);
            console.log("Funcion agregada a la tabla de funciones");
            
            return this;

        } catch (error) {
            sb.append("\n");
            sb.append("Error Semántio al momento de definir la funcion");
            sb.append("\n");
            console.error("An error occurred:", error.message);
            this.tipo = "ERROR";
            return this;
        }
        
        
    }

}

module.exports = Funcion;