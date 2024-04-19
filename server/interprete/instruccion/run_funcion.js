const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');
const simb = require('../Simbolos/simb.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class run_funcion extends Instruccion{
    constructor(id, valores, fila, columna){
        super(TipoInstr.FUNCION, fila, columna);
        this.id = id;
        this.valores = valores;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('run m/f');
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('(');
        if (this.valores != null){
            this.valores.forEach(valorz => {
                nodo.agregarHijoAST(valorz.getNodo());
            });
        }
        nodo.agregarHijo(')');
        nodo.agregarHijo(';');
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        //let funcionNombre = this.id;

        try {
            //console.log("a punto de entrar a funcion");
            //console.log(this.id);
            //console.log(tablaFunciones);
            let funcionNombre = new Entorno(this.id, entorno);
            let datos= [];
            let funcion = tablaFunciones.getFuncion(this.id, sb);
            
            if (funcion == null){
                console.log("Error Semántico: LA FUNCION NO SE PUEDE PROCESAR -< NO EXISTE");
                sb.append("\n");
                sb.append("Error Semántico: LA FUNCION NO SE PUEDE PROCESAR -< NO EXISTE");
                //this.tipo = "ERROR";
                sb.append("\n");
                return this;
            }

        else{
            //--FUNCIONES---------------
            console.log(funcion.parametros)
            if (funcion.parametros != null){
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
            console.log(datos);
            console.log(datos.length);
            for (let i = 0; i < datos.length; i++) {
                console.log("-------------------");
                console.log(">>>>>>>>>>>>>>>>>>>>");
                const currentItem = datos[i];
                //console.log(currentItem); // Print current item from instruccion array
                let tipo_v = parametros[i * 2];
                let id_v = parametros[i * 2 + 1]
                //console.log(tipo_v);
                //console.log(id_v);
                let variable_ag = new simb(id_v, currentItem, tipo_v, "temporal", this.fila, this.columna, this.id);
                console.log(">>>>>>>>>>>>>>>>>>>>");
                console.log(variable_ag);

                tablaDeSimbolos.agregarSimbolo(variable_ag);
                
            }}

            let instrucciones = funcion.instrucciones;
            let result = TipoInstr.FUNCION;
            for (let i = 0; i < instrucciones.length; i++) {
                const instruccion = instrucciones[i];
                instruccion.interpretar(funcionNombre, tablaDeSimbolos, sb, tablaFunciones);
                if(instruccion.tipo == TipoInstr.BREAK){
                    result = TipoInstr.BREAK;
                    break;
                }if(instruccion.tipo == TipoInstr.RETURN){
                    result = TipoInstr.RETURN;
                    return;
                    
                } 
            }

            if(result == TipoInstr.BREAK){
                return;
            }
            if(result == TipoInstr.RETURN){
                return;
            } 
            

            if (funcion.parametros!=null){tablaDeSimbolos.limpiarVariablesTemporales();}

            
            return this;
    }
    //if (funcion.parametros!=null){tablaDeSimbolos.limpiarVariablesTemporales();}
        } catch (error) {
            
            console.error('ERROR tablaFunciones.getFuncion:', error);
            
        }

}
}

module.exports = run_funcion;