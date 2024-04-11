const simb = require('./simb');

class tablaSimbolos {
    constructor() {
        this.tablaSimbolos = [];
    }

    agregarSimbolo(simb) {
        this.tablaSimbolos.push(simb);
        //console.log(this.tablaSimbolos);
    }

    limpiarVariablesTemporales() {
        this.tablaSimbolos = this.tablaSimbolos.filter(variable => variable.tipoVar !== "temporal");
        console.log("Variables temporales eliminadas.");
    }

    actualizarValor1D(id, indice, nuevoValor, entorno) {
        const index = this.getSimboloIndex(id, entorno);
        console.log("valor que entra a la func ", nuevoValor);
        if (index !== -1) {
            const symbol = this.tablaSimbolos[index];
            if (Array.isArray(symbol.valor) && indice >= 0 && indice < symbol.valor.length) {
                symbol.valor[indice] = nuevoValor;
                console.log(`Valor actualizado en la posición ${indice} del símbolo ${id}`);
                this.reporteTabla(); // actualizar el reporte
            } else {
                console.log(`Índice ${indice} fuera de rango`);
            }
        } else {
            console.log(`No se puede actualizar el valor, el símbolo ${id} no existe`);
        }
    }
    


    modificarValor2D(id, rowIndex, colIndex, nuevoValor,entorno) {
        const index = this.getSimboloIndex(id,entorno);
        if (index !== -1) {
            const symbol = this.tablaSimbolos[index];
            if (Array.isArray(symbol.valor) && symbol.valor.length > rowIndex &&
                Array.isArray(symbol.valor[rowIndex]) && symbol.valor[rowIndex].length > colIndex) {
                symbol.valor[rowIndex][colIndex] = nuevoValor;
                console.log(`Valor en fila ${rowIndex} y columna ${colIndex} del símbolo ${id} actualizado a ${nuevoValor}`);
                this.reporteTabla(); // Update the table
            } else {
                console.log(`Índices de fila o columna fuera de rango para el símbolo ${id}`);
            }
        } else {
            console.log(`No se encontró el símbolo ${id}`);
        }
    }
    
    

    getSimbolo(nombre, entorno) {
    
        if (entorno.nombre === "GLOBAL") 
        {
            //console.log("entorno global UNO");
            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == "GLOBAL") {
                    return this.tablaSimbolos[i];
                }
            }
            console.log("Variable no existe");
            return null;
        } else {

            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == entorno.nombre) {
                    return this.tablaSimbolos[i];
                }
            }
            
                console.log("ENTORNO ANTERIOR: ", entorno.anterior.nombre);
                for (let i = 0; i < this.tablaSimbolos.length; i++) {
                    if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == entorno.anterior.nombre) {
                        return this.tablaSimbolos[i];
                    }
                }

            // si no global
            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == "GLOBAL") {
                    return this.tablaSimbolos[i];
                }
            }
            console.log("Variable no existe");
            return null;
        }
    }


    getTabla() {
        return this.tablaSimbolos;
    }

    getSimboloIndex(nombre, entorno) {
        if (entorno.nombre === "GLOBAL") {
            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == "GLOBAL") {
                    return i;
                }
            }
            console.log("Variable no existe");
            return -1;
        } else {
            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == entorno.nombre) {
                    return i;
                }
            }
            
            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == "GLOBAL") {
                    return i;
                }
            }
            console.log("Variable no existe");
            return -1;
        }
    }

    
    actualizarValor(index, nuevoValor) {
        if (index !== -1) {
            this.tablaSimbolos[index].valor = nuevoValor;
            console.log(`Valor de ${this.tablaSimbolos[index].id} actualizado a ${nuevoValor}`);
        } else {
            console.log("No se puede actualizar el valor, la variable no existe.");
        }
    }


    reporteTabla() {
        let html = `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #829BB9 ;
                    color: white;
                }
            </style>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Fila</th>
                    <th>Columna</th>
                    <th>ENTORNO</th>
                    <th>estructura</th>
                </tr>`;
        
        for (let i = 0; i < this.tablaSimbolos.length; i++) {
            html += `
                <tr>
                    <td>${this.tablaSimbolos[i].id}</td>
                    <td>${this.tablaSimbolos[i].tipo}</td>
                    <td>${this.tablaSimbolos[i].valor}</td>
                    <td>${this.tablaSimbolos[i].fila}</td>
                    <td>${this.tablaSimbolos[i].columna}</td>
                    <td>${this.tablaSimbolos[i].entorno}</td>
                    <td>${this.tablaSimbolos[i].tipoVar}</td>
                </tr>`;
        }
        
        html += `
            </table>`;
        
        const fs = require('fs');
        fs.writeFileSync('tabla_simbolos.html', html, 'utf-8');
    }
    
}

module.exports = tablaSimbolos;