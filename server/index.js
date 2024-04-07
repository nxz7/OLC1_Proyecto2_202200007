const app = require('./app/app');
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const analizador = require("./analizador/parser.js");
const Entorno = require("./interprete/entorno/Entorno.js");
const tablaSimbolos = require('./interprete/Simbolos/tablaSimbolos.js');

let entrada = `
cout<< 55;
cout<< "-------";

cout<< 96>='a';
cout<< 15>=15.75;
cout<< 1>=false+1;
cout<< 'A'>='A';
cout<< "-------";
char cuatro= '4';
int cinco= 5;
char ff= 's';

cout<< "-------";
if(100>='a'){
    cout<< "dentro del if jeje";
    cout<< 2+2+2*10;
    double cinco= 7.8;
    cout<< "---prueba---- 7.8-";
    cout<< cinco+ 3*2;
    cout<< "--------------";
}

cout<< "---prueba---- cinco-";
cout<< "---aca ------";
cout<< cinco +"hola";
cout<< "--------------";
bool cond1= 1>0;
bool cond2= 1>=5;
cout<< "------logico-----";
cout<< 1<5 || "hola"=="holaa";
cout<< "--------------";
cout<< 5>=5 ? 25-5:2*cinco;
cout<< !cond1;
cout<< -1;
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