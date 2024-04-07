const app = require('./app/app');
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const analizador = require("./analizador/parser.js");
const Entorno = require("./interprete/entorno/Entorno.js");
const tablaSimbolos = require('./interprete/Simbolos/tablaSimbolos.js');

let entrada = `

cout<< "-------";
char cuatro= '4';
int cinco= 5;
bool ff= 1<5 && "hola"=="hola";

cout<< "-------";
if(110>='a'){
    cout<< "dentro del if jeje";
    cout<< 2+2+2*10;
    double cinco= 10-1-2.5;
    cout<< "---prueba---- 7.8-";
    cout<< cinco+ 3*2+20.2;
    cout<< "--------------";
}

cout<< "-saliooo del if--------";
cout<< cinco +"hola";
cout<< 5-2.2;

cout<< "------logico-----";
cout<< 1<5 || "hola"=="holaa";
cout<< "--------------";


int a= 4>=5 ? 5.5-0.7:2*cinco;
cout<< "--------------";
a--;
cout<< "--------------";
cout<< a--;
cout<< "--------------";
cout<< !ff;
`;

let resultado = analizador.parse(entrada); // lo del parser
let entornoGlobal = new Entorno("GLOBAL", null);
let tablaDeSimbolos = new tablaSimbolos();
//console.log(resultado);

try {
    resultado.forEach(instruccion => {
        instruccion.interpretar(entornoGlobal,tablaDeSimbolos);
    });
} catch (error) {
    console.error("ERROR SEMANTICO EN:", error);
}

tablaDeSimbolos.reporteTabla();