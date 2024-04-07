class Instruccion{
    constructor(tipo, fila, columna){
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    interpretar(entorno,tablaDeSimbolos){}
}

const TipoInstr = {
    PRINT: 'PRINT',
    IF: 'IF',
    Variable: 'Variable',
    INC_DEC: 'INC_DEC'
}

module.exports = {Instruccion, TipoInstr}