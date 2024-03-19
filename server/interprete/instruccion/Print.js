const Instruccion = require("../Instruccion.js");

class Print extends Instruccion{

    constructor(expresion){
        super();
        this.expresion = expresion;
    }

    interpretar(entorno){
        let valor = this.expresion.interpretar(null);
        
        if(this.expresion.tipo == "ERROR"){
            console.log("ERROR SEMANTICO > PRINT ERRORES")
            return;
        }
        console.log(valor);
    }

}

module.exports = Print;