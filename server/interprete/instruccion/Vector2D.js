const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const StringBuilder = require('../StringBuilder.js');
const simb = require('../Simbolos/simb.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Vector2D extends Instruccion{
    constructor(id, tipo,tipo2,tipoArr, expresion, expresionDos, fila, columna){
        super(TipoInstr.ARREGLO, fila, columna);
        this.expresion = expresion;
        this.expresionDos = expresionDos;
        this.id = id;
        this.tipo = tipo;
        this.tipo2 = tipo2;
        this.tipoArr = tipoArr;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('DECLARACION[VECT -2D]');
        let tipoD = ";";
        nodo.agregarHijo(this.tipo);
        nodo.agregarHijo(this.id);
            nodo.agregarHijo('[][]');
            nodo.agregarHijo('=');
        if (this.tipoArr == "DEF"){
            nodo.agregarHijo('new');
            nodo.agregarHijo(this.tipo2);
            nodo.agregarHijo("[");
            nodo.agregarHijoAST(this.expresion.getNodo());
            nodo.agregarHijo("]");
            nodo.agregarHijo("[");
            nodo.agregarHijoAST(this.expresionDos.getNodo());
            nodo.agregarHijo("]");
            nodo.agregarHijo(";");

        }else if(this.tipoArr == "LISTA"){
            nodo.agregarHijo("[");
            nodo.agregarHijo("[");
            this.expresion.forEach(instruccion => {
                
                nodo.agregarHijoAST(instruccion.getNodo());
            });
            nodo.agregarHijo("]");
            nodo.agregarHijo(",");
            nodo.agregarHijo("[");
            this.expresionDos.forEach(instruccion => {
                nodo.agregarHijoAST(instruccion.getNodo());
            });
            nodo.agregarHijo("]");
            nodo.agregarHijo("]");
            nodo.agregarHijo(";");

        }
        return nodo;

        
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){
        let arreglo = [];
        let arreglo2 = [];
        let arr2d = [];
        let resultado = [];
        let resultado2 = [];
        
        if(this.tipo2!=this.tipo){
            console.log("Error semántico: cohesion en los tipos declarados[2d]");
            sb.append("\n");
            sb.append("Error semántico: cohesion en los tipos declarados[2d]");
            sb.append("\n");
            this.tipo == "ERROR";
            return this;
        } else{
        
        if (this.tipoArr == "DEF"){
            let valor=this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
            let valor2=this.expresionDos.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
            if (this.tipo == "DOUBLE") {
                for (let i = 0; i < valor; i++) {
                    resultado.push(0.0);
                }
                for (let i = 0; i < valor2; i++) {
                    resultado2.push(0.0);
                }
                arr2d[0] = resultado;
                arr2d[1] = resultado2;
                //console.log(resultado);
                entorno.addSimbolo(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag1 = new simb(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag1);

            }else if(this.tipo == "INT"){
                for (let i = 0; i < valor; i++) {
                    resultado.push(0);
                }
                for (let i = 0; i < valor2; i++) {
                    resultado2.push(0);
                }
                arr2d[0] = resultado;
                arr2d[1] = resultado2;
                //console.log(resultado);
                entorno.addSimbolo(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag1 = new simb(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag1);

            }else if (this.tipo == "STD::STRING"){
                for (let i = 0; i < valor; i++) {
                    resultado.push("");
                }
                for (let i = 0; i < valor2; i++) {
                    resultado2.push("");
                }
                arr2d[0] = resultado;
                arr2d[1] = resultado2;
                //console.log(resultado);
                entorno.addSimbolo(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag1 = new simb(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag1);
            }else if (this.tipo == "BOOL"){
                for (let i = 0; i < valor; i++) {
                    resultado.push(true);
                }
                for (let i = 0; i < valor2; i++) {
                    resultado2.push(true);
                }
                arr2d[0] = resultado;
                arr2d[1] = resultado2;
                //console.log(resultado);
                entorno.addSimbolo(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag1 = new simb(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag1);

            }else if (this.tipo == "CHAR"){
                for (let i = 0; i < valor; i++) {
                    resultado.push('0');
                }
                for (let i = 0; i < valor2; i++) {
                    resultado2.push('0');
                }
                arr2d[0] = resultado;
                arr2d[1] = resultado2;
                //console.log(resultado);
                entorno.addSimbolo(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                let variable_ag1 = new simb(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
                tablaDeSimbolos.agregarSimbolo(variable_ag1);
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

            this.expresionDos.forEach(instruccion => {
                instruccion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
                arreglo2.push(instruccion.valor);
    
            });
            arr2d[0] = arreglo;
            arr2d[1] = arreglo2;
            //console.log(arr2d);
            entorno.addSimbolo(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
            let variable_ag = new simb(this.id, arr2d, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna, entorno.nombre);
            tablaDeSimbolos.agregarSimbolo(variable_ag);

        }
    }

        return this;
    }
}

module.exports = Vector2D;