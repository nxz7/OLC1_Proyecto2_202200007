const app = require('./app/app');
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const analizador = require("./analizador/parser.js");
const Entorno = require("./interprete/entorno/Entorno.js");

let entrada = `
cout<< 55;
cout<< "-------";

cout<< 96>='a';
cout<< 15>=15.75;
cout<< 1>=false+1;
cout<< 'A'>='A';
cout<< "-------";

cout<< "-------";
cout<< 'a'>=97.30;
cout<< 15.75>=15;
cout<< false>=7;
cout<< 11.80>=11.85;

`;

let resultado = analizador.parse(entrada); // lo del parser
let entornoGlobal = new Entorno("GLOBAL", null);

//console.log(resultado);

try {
    resultado.forEach(instruccion => {
        instruccion.interpretar(entornoGlobal);
    });
} catch (error) {
    console.error("ERROR SEMANTICO EN:", error);
}

