const errors = require('./error');

class tablaError {
    constructor() {
        this.tablaError = [];
    }

    agregarError(errors) {
        this.tablaError.push(errors);
        //console.log(errors);
    }

    clearTablaError() {
        this.tablaError = []; // BORRAR
    }

    getTablaE() {
        return this.tablaError;
    }
//reporte
imprimirTablaE() {
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
                background-color: #A481E2 ;
                color: white;
            }
        </style>
        <table border="1">
            <tr>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Fila</th>
                <th>Columna</th>
            </tr>`;
    
    for (let i = 0; i < this.tablaError.length; i++) {
        html += `
            <tr>
                <td>${this.tablaError[i].tipo}</td>
                <td>${this.tablaError[i].valor}</td>
                <td>${this.tablaError[i].fila}</td>
                <td>${this.tablaError[i].columna}</td>
            </tr>`;
    }
    
    html += `
        </table>`;
    
    // html
    const fs = require('fs');
    fs.writeFileSync('tabla_errores.html', html, 'utf-8');
}

}

module.exports = tablaError;
