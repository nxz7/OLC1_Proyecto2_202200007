const simbolo = require('./simbolo');

class tablaSimbolos {
    constructor() {
        this.tablaSimbolos = [];
    }

    agregarSimbolo(simbolo) {
        this.tablaSimbolos.push(simbolo);
        console.log(this.tablaSimbolos);
    }
//esto va servir para jalar los id declarados <-------------------
    getSimbolo(id) {
        for (let i = 0; i < this.tablaSimbolos.length; i++) {
            if (this.tablaSimbolos[i].id == id) {
                return this.tablaSimbolos[i];
            }
        }
        return null;
    }

    getTabla() {
        return this.tablaSimbolos;
    }
//prueba de imprimir en consola ---> entorno 
    imprimirTabla() {
        console.log("Tabla de Símbolos:");
        console.log("=============================");
        console.log("ID\tTipo\tValor\tFila\tColumna");
        for (let i = 0; i < this.tablaSimbolos.length; i++) {
            console.log(`${this.tablaSimbolos[i].id}\t${this.tablaSimbolos[i].tipo}\t${this.tablaSimbolos[i].valor}\t${this.tablaSimbolos[i].fila}\t${this.tablaSimbolos[i].columna}`);
        }
        console.log("=================");
    }
}

module.exports = tablaSimbolos;
