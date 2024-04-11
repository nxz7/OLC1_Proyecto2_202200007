const express = require('express')
const router = express.Router()

const analizador = require("../../analizador/parser.js");
const Entorno = require("../../interprete/entorno/Entorno.js");
const tablaSimbolos = require('../../interprete/Simbolos/tablaSimbolos.js');
const StringBuilder = require('../../interprete/StringBuilder.js');
const tabladeFunciones = require('../../interprete/TablaMF/tablafuncion.js');

let sb = new StringBuilder();


router.get('/', (req, res) => {
    res.send('Server working')
})

router.post('/Ejecutar', (req, res) => {
    const textoRecibido = req.body.texto;
    //console.log( textoRecibido);
    let resultado = analizador.parse(textoRecibido); // lo del parser
    let entornoGlobal = new Entorno("GLOBAL", null);
    let tablaDeSimbolos = new tablaSimbolos();
    let tablaFunciones = new tabladeFunciones();
    console.log("resultado", resultado);
    res.send('Texto recibido correctamente');
    try {
        // First iteration: Interpret all instructions except those with specific constructor name
        resultado.forEach(instruccion => {
            if (instruccion.constructor.name !== "execute") {
                instruccion.interpretar(entornoGlobal, tablaDeSimbolos, sb, tablaFunciones);
            }
        });
    
        // Second iteration: Interpret only instructions with specific constructor name
        resultado.forEach(instruccion => {
            if (instruccion.constructor.name === "execute") {
                instruccion.interpretar(entornoGlobal, tablaDeSimbolos, sb, tablaFunciones);
            }
        });
    
        console.log("final");
        console.log(sb.toString());
    } catch (error) {
        console.error("ERROR SEMANTICO EN:", error);
    }
    
    tablaDeSimbolos.reporteTabla();
    tablaFunciones.reporteTabla();
});


router.post('/Show', (req, res) => {
    try {
        const content = sb.toString();
        console.log("lo que muestraconsola:", content);
        res.send(content);
        sb.clear();
    } catch (error) {
        console.error("ERROR AL MOSTRAR EN CONSOLA:", error);
        res.status(500).send("ERROR MIENTRAS SE MOSTRABA EN CONSOLA");
        
    }
});


module.exports = router

