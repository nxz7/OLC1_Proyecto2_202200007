const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const StringBuilder = require('../StringBuilder.js');

const simb = require('../Simbolos/simb.js');

class Vector extends Instruccion{
    constructor(id, tipo,tipo2,tipoArr, expresion, fila, columna){
        super(TipoInstr.ARREGLO, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
        this.tipo2 = tipo2;
        this.tipoArr = tipoArr;
    }

    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        let arreglo = [];

        
        if(this.tipo2!=this.tipo){
            console.log("Error semántico: cohesion en los tipos declarados");
            sb.append("\n");
            sb.append("Error semántico: cohesion en los tipos declarados");
            sb.append("\n");
            this.tipo == "ERROR";
            return this;
        } else{
        
        if (this.tipoArr == "DEF"){
            let valor=this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
            if (this.tipo == "DOUBLE") {
                let resultado = [];
                for (let i = 0; i < valor; i++) {
                    resultado.push(0.0);
                }
                //console.log(resultado);
                entorno.addSimbolo(this.id, resultado, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag1 = new simb(this.id, resultado, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag1);

            }else if(this.tipo == "INT"){
                let resultado2 = [];
                for (let i = 0; i < valor; i++) {
                    resultado2.push(0);
                }
                //console.log(resultado2);
                entorno.addSimbolo(this.id, resultado2, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag2 = new simb(this.id, resultado2, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag2);

            }else if (this.tipo == "STD::STRING"){
                let resultado3 = [];
                for (let i = 0; i < valor; i++) {
                    resultado3.push("");
                }
                //console.log(resultado3);
                entorno.addSimbolo(this.id, resultado3, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag3 = new simb(this.id, resultado3, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag3);
            }else if (this.tipo == "BOOL"){
                let resultado4 = [];
                for (let i = 0; i < valor; i++) {
                    resultado4.push(true);
                }
                //console.log(resultado4);
                entorno.addSimbolo(this.id, resultado4, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag4 = new simb(this.id, resultado4, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag4);

            }else if (this.tipo == "CHAR"){
                let resultado5 = [];
                for (let i = 0; i < valor; i++) {
                    resultado5.push('0');
                }
                //console.log(resultado5);
                entorno.addSimbolo(this.id, resultado5, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag5 = new simb(this.id, resultado5, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag5);
            }else{
                console.log("Error semántico:en la declaracion de arreglo [variable]");
                sb.append("\n");
                sb.append("Error semántico:en la declaracion de arreglo [variable]");
                sb.append("\n");
                return this;
            }
            

        }else if(this.tipoArr == "LISTA"){
            this.expresion.forEach(instruccion => {
                instruccion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
                arreglo.push(instruccion.valor);
    
            });
            //console.log(arreglo);
            entorno.addSimbolo(this.id, arreglo, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
            let variable_ag = new simb(this.id, arreglo, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
            tablaDeSimbolos.agregarSimbolo(variable_ag);

            //let prueba = tablaDeSimbolos.getSimbolo(this.id,entorno);

            //console.log(prueba.valor);
            //console.log("***");
            //console.log(prueba.valor[3]);

        }
    }

        return this;
    }
}

module.exports = Vector;