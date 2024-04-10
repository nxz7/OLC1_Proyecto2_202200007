const func = require('./func');

class tablaFunciones{
    constructor() {
        this.tablaFunciones = [];
    }

    agregarFuncion(func) {
        this.tablaFunciones.push(func);

    }


    getFuncion(nombre, sb) {
            for (let i = 0; i < this.tablaFunciones.length; i++) {
                if (this.tablaFunciones[i].id == nombre) {
                    return this.tablaFunciones[i];

                }else {
                    sb.append("\n");
                    sb.append("Error semántico: la función no existe");
                    sb.append("\n");
                    return null;
                }
            } 
    }


    getTabla() {
        return this.tablaFunciones;
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
                    <th>parametros</th>
                    <th>instrucciones</th>
                    <th>MET/FUNC</th>
                </tr>`;
        
        for (let i = 0; i < this.tablaFunciones.length; i++) {
            html += `
                <tr>
                    <td>${this.tablaFunciones[i].id}</td>
                    <td>${this.tablaFunciones[i].tipoF}</td>
                    <td>${this.tablaFunciones[i].parametros}</td>
                    <td>${this.tablaFunciones[i].instrucciones}</td>
                    <td>${this.tablaFunciones[i].tipoDec}</td>
                </tr>`;
        }
        
        html += `
            </table>`;
        
        const fs = require('fs');
        fs.writeFileSync('funcion_metodo.html', html, 'utf-8');
    }
    
}

module.exports = tablaFunciones;