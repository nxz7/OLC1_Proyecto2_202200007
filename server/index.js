const app = require('./app/app');
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const analizador = require("./analizador/parser.js");
const Entorno = require("./interprete/entorno/Entorno.js");

let entrada = `
cout<< 55;
cout<< "-------";

cout<< 97<='a';
cout<< 15<=15.75;
cout<< 1<=false;
cout<< 12<=13;
cout<< "-------";

cout<< "-------";
cout<< 'a'<=98;
cout<< 15.75<=15;
cout<< false<=0;
cout<< 11<=11;

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

