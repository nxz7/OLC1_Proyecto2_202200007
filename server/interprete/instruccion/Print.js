const Instruccion = require("../Instruccion.js");

class Print extends Instruccion{

    constructor(expresion){
        super();
        this.expresion = expresion;
    }

    interpretar(entorno) {
        try {
            let valor = this.expresion.interpretar(null);
    
            if (this.expresion.tipo == "ERROR") {
                console.log("ERROR SEMANTICO >>>> intentar imprimir un error");
                return;
            }
            console.log(valor);
        } catch (error) {
            console.error("ERROR", error);
        }
    }
    

}

module.exports = Print;