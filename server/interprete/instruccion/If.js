const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const StringBuilder = require('../StringBuilder.js');

class If extends Instruccion{
    constructor(condicion, instr_if, fila, columna){
        super(TipoInstr.IF, fila, columna);
        this.condicion = condicion;
        this.instr_if = instr_if;
    }

    interpretar(entorno,tablaDeSimbolos,sb){
        let entornoIf = new Entorno(TipoInstr.IF, entorno);
        this.condicion.interpretar(entornoIf,tablaDeSimbolos,sb);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion del if debe ser tipo boolean");
            sb.append("\n");
            sb.append("Error Semántico: la condicion del if debe ser tipo boolean");
            //this.tipo = "ERROR";
            sb.append("\n");
            return this;
        }
//arreglar esto
        if(String(this.condicion.valor).toLowerCase() === "true"){
            this.instr_if.forEach(instruccion => {
                instruccion.interpretar(entornoIf,tablaDeSimbolos,sb);
            });
        }
        else{
            // Ejecución del else If o else
        }
        // Guardar entorno
        return this;
    }

}

module.exports = If