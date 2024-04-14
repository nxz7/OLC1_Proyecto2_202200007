const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const NodoAst_1 = require("../Simbolos/NodoAst");
const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');

class inst_IncDec extends Instruccion{
    constructor(id, operador,tipo, fila, columna){
        super(TipoInstr.INC_DEC, fila, columna);
        this.id = id;
        this.operador = operador;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('inc/dec');
        nodo.agregarHijo(this.id);
        nodo.agregarHijo(this.operador);
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
        let index = tablaDeSimbolos.getSimboloIndex(this.id,entorno);
try {
        if (encontrada!= null){
            if(this.operador == "++"){
                if(encontrada.tipo == "INT"){
                    let actualizar = encontrada.valor+1;
                    tablaDeSimbolos.actualizarValor(index, actualizar);
                    return Number(actualizar);
                }
                //DOUBLR 
                else if (this.expresion.tipo == "DOUBLE"){
                    let actualizar = encontrada.valor+1;
                    tablaDeSimbolos.actualizarValor(index, actualizar);
                    return parseFloat(actualizar);
                } 
                else{
                    this.tipo == "ERROR";
                    console.log("Error Semántico: [++]TIENE QUE SER VARIABLE NUMERICA");
                    sb.append("\n");
                sb.append("Error Semántico: [++]TIENE QUE SER VARIABLE NUMERICA");
                sb.append("\n");
                    return this.valor;
                }
    
            }
            else if(this.operador == "--"){
                if(encontrada.tipo == "INT"){
                    let actualizar = encontrada.valor-1;
                    tablaDeSimbolos.actualizarValor(index, actualizar);
                    return Number(actualizar);
                }
                //DOUBLR 
                else if (this.expresion.tipo == "DOUBLE"){
                    let actualizar = encontrada.valor-1;
                    tablaDeSimbolos.actualizarValor(index, actualizar);
                    return parseFloat(actualizar);
                } 
                else{
                    this.tipo == "ERROR";
                    console.log("Error Semántico: [--]TIENE QUE SER VARIABLE NUMERICA");
                    sb.append("\n");
                sb.append("Error Semántico: [--]TIENE QUE SER VARIABLE NUMERICA");
                sb.append("\n");
                    return this.valor;
                }

            }else{
                console.log("Error Semántico: operando no valido");
                sb.append("\n");
                sb.append("Error Semántico:operando no valido");
                sb.append("\n");
                return this;
            
            }

            }
        else {
            console.log("Error semántico: la variable no existe");
            sb.append("\n");
                sb.append("Error semántico: la variable no existe");
                sb.append("\n");
            return this;
        }

    } catch (error) {
        console.log("ERROR SEMANTICO");
        sb.append("\n");
        sb.append("ERROR SEMANTICO >>> inc/dec ");
        sb.append("\n");
    }

    }
}

module.exports = inst_IncDec;