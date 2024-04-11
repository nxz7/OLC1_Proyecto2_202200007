const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");

const simb = require('../Simbolos/simb.js');
const StringBuilder = require('../StringBuilder.js');

class inst_IncDec extends Instruccion{
    constructor(id, operador,tipo, fila, columna){
        super(TipoInstr.INC_DEC, fila, columna);
        this.id = id;
        this.operador = operador;
    }

    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        let encontrada = tablaDeSimbolos.getSimbolo(this.id,entorno);
        let index = tablaDeSimbolos.getSimboloIndex(this.id,entorno);

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
    }
}

module.exports = inst_IncDec;