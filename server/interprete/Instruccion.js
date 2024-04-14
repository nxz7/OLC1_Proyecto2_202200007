class Instruccion{
    constructor(tipo, fila, columna){
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    interpretar(entorno,tablaDeSimbolos,sb){}
}

const TipoInstr = {
    PRINT: 'PRINT',
    IF: 'IF',
    Variable: 'Variable',
    INC_DEC: 'INC_DEC',
    ARREGLO: 'Arreglo',
    FUNCION: 'FUNCION',
    METODO: 'METODOS',
    EXECUTE: 'EXECUTE',
    IF_ELSE: 'IF_ELSE',
    ELSE: 'ELSE',
    WHILE: 'WHILE',
    DOWHILE: 'DOWHILE',
    FOR: 'FOR'
}

module.exports = {Instruccion, TipoInstr}