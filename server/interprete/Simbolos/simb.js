class simb{
    constructor(id, valor, tipo, tipoVar, fila, columna, entorno){
        this.id = id;
        this.valor = valor;  // lo que voy a guardas
        this.tipo = tipo;
        this.tipoVar = tipoVar;
        this.fila = fila;
        this.columna = columna;
        this.entorno = entorno;
    }
}

module.exports = simb