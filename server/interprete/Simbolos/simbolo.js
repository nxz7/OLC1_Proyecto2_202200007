class simbolo{
    constructor(id, valor, tipo, linea, columna, entorno){
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
        this.entorno = null;
        this.linea = linea;
        this.columna = columna;
    }
}

module.exports = simbolo