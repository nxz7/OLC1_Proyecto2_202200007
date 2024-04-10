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
            //console.log("ENTORNO: ", entorno.nombre);
            for (let i = 0; i < this.tablaSimbolos.length; i++) {
                if (this.tablaSimbolos[i].id == nombre && this.tablaSimbolos[i].entorno == entorno.nombre) {
                    return this.tablaSimbolos[i];
                }
            }
            
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