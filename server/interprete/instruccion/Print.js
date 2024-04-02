const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");

class Print extends Instruccion{

    constructor(expresion, fila, columna){
        super(TipoInstr.PRINT, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno) {
        try {
            let valor = this.expresion.interpretar(entorno);
    
            if (this.expresion.tipo == "ERROR") {
                console.log("Error Semántico >>>> intentar imprimir un error");
                return;
            }
            console.log(valor);
        } catch (error) {
            console.error("ERROR", error);
        }
    }
    

}

module.exports = Print;