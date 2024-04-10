const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const simb = require('../Simbolos/simb.js');


class run_funcion extends Instruccion{
    constructor(id, valores, fila, columna){
        super(TipoInstr.FUNCION, fila, columna);
        this.id = id;
        this.valores = valores;
    }

    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        //let funcionNombre = this.id;
        let funcionNombre = new Entorno(this.id, entorno);
        let datos= [];

        let funcion = tablaFunciones.getFuncion(this.id,sb);

        if (funcion == null){
            console.log("Error Semántico: LA FUNCION NO SE PUEDE PROCESAR -< NO EXISTE");
            sb.append("\n");
            sb.append("Error Semántico: LA FUNCION NO SE PUEDE PROCESAR -< NO EXISTE");
            //this.tipo = "ERROR";
            sb.append("\n");
            return this;
        }

        else{
        let parametros = funcion.parametros;

        console.log("a punto de entrar a valor");
        console.log(this.valores);
        this.valores.forEach(valorz => {
            valorz.interpretar(funcionNombre,tablaDeSimbolos,sb,tablaFunciones);
            if (valorz.valor == "ERROR"){
            let final = tablaDeSimbolos.getSimbolo(valorz.id,funcionNombre);
            datos.push(final.valor);
            console.log(final.valor);
        }else {
            datos.push(valorz.valor);
            console.log(valorz.valor);
        }
            
        });


        for (let i = 0; i < datos.length; i++) {
            console.log("-------------------")
            const currentItem = datos[i];
            //console.log(currentItem); // Print current item from instruccion array
            let tipo_v = parametros[i * 2];
            let id_v = parametros[i * 2 + 1]
            //console.log(tipo_v);
            //console.log(id_v);
            let variable_ag = new simb(id_v, currentItem, tipo_v, "temporal", this.fila, this.columna, this.id);
            tablaDeSimbolos.agregarSimbolo(variable_ag);
            
        }

        let instrucciones = funcion.instrucciones;

        instrucciones.forEach(instruccion => {
            instruccion.interpretar(funcionNombre,tablaDeSimbolos,sb,tablaFunciones);
            console.log("instruccion");
            console.log(instruccion);
        });

        tablaDeSimbolos.limpiarVariablesTemporales();

        
        return this;
    }
}
}

module.exports = run_funcion