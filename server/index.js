const app = require('./app/app');
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const analizador = require("./analizador/parser.js");

let entrada = `
    cout<< 25+15*2;
    ?@&
    cout<< 15*2.5 ;
15*2+2; %
cout<< 15/false ;

`;

let resultado = analizador.parse(entrada); // lo del parser

console.log(resultado);

try {
    resultado.forEach(instruccion => {
        instruccion.interpretar(null);
    });
} catch (error) {
    console.error("ERROR SEMANTICO EN:", error);
}

