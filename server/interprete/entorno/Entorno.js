const { Expresion, TipoDato } = require("../Expresion");
const { Simbolo } = require("./Simbolo");

class Entorno{
    constructor(nombre, anterior){
        this.nombre = nombre;
        this.anterior = anterior;
        this.tablaSim = {};
        this.tablaFunc = {};
    }

    addSimbolo(nombre, valor, tipo, tipoVar, fila, columna){
        if(nombre in this.tablaSim){
            console.log("error semántico: la variable ya existe en el entorno actual");
            return;
        }
        this.tablaSim[nombre] = new Simbolo(nombre, valor, tipo, tipoVar, fila, columna);
        console.log(`Se agregó la variable ${nombre} al entorno ${this.nombre}`);
    }

    getSimbolo(nombre){
        let ent = this;
        while(ent != null){
            if(!(nombre in ent.tablaSim)){
                ent = ent.anterior;
            }
            return ent.tablaSim[nombre]
        }
        return new Expresion("ERROR", TipoDato.ERROR, 0, 0);
    }

    printEntorno() {
        console.log(`Nombre del entorno: ${this.nombre}`);
        console.log("Tabla de símbolos:");
        for (const nombre in this.tablaSim) {
            const simbolo = this.tablaSim[nombre];
            console.log(`Nombre: ${simbolo.nombre}, Valor: ${simbolo.valor}, Tipo: ${simbolo.tipo}, TipoVar: ${simbolo.tipoVar}, Fila: ${simbolo.fila}, Columna: ${simbolo.columna}`);
        }
        
    }
    
}


module.exports = Entorno;