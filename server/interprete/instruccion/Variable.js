const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo, Simbolo } = require("../entorno/Simbolo");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");
const simb = require('../Simbolos/simb.js');

class Variable extends Instruccion{
    constructor(id, tipo, expresion, fila, columna){
        super(TipoInstr.VARIABLE, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('DECLARACION[VAR]');
        let tipoD = ";";
        if (this.tipo == "INT") {
            nodo.agregarHijo('INT');
            tipoD = "INT";
        }
        else if (this.tipo == "STD::STRING") {
            nodo.agregarHijo('STD::STRING');
            tipoD = "STD::STRING";
        }
        else if (this.tipo == "DOUBLE") {
            nodo.agregarHijo("DOUBLE");
            tipoD = "DOUBLE";
        }
        else if (this.tipo == "CHAR") {
            nodo.agregarHijo('CHAR');
            tipoD = "CHAR";
        }
        else if (this.tipo == "BOOL") {
            nodo.agregarHijo('BOOL');
            tipoD = "BOOL";
        }
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('=');
        if (this.expresion != null) {
            nodo.agregarHijoAST(this.expresion.getNodo());
        }
        nodo.agregarHijo(';');
        return nodo;
    }


    interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones){

        let valor=this.expresion.interpretar(entorno,tablaDeSimbolos,sb,tablaFunciones);
        //console.log("1");
        if(this.expresion.tipo != this.tipo){
            console.log("Error semántico: el tipo de la variable no coincide con el tipo de la expresión");
            sb.append("\n");
            sb.append("Error semántico: el tipo de la variable no coincide con el tipo de la expresión");
            sb.append("\n");
            
            return this;
        }
        //console.log("VALOR: ", valor);
        entorno.addSimbolo(this.id, valor, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
        //entorno.printEntorno();
        let variable_ag = new simb(this.id, valor, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna, entorno.nombre);
        tablaDeSimbolos.agregarSimbolo(variable_ag);


        return this;
    }
}

module.exports = Variable;