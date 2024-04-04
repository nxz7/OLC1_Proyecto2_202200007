const app = require('./app/app');
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const analizador = require("./analizador/parser.js");
const Entorno = require("./interprete/entorno/Entorno.js");

let entrada = `
cout<< 2+8;
    ?@&

    cout<< 15*2.5 ;
cout<< 15/false ;
15+2;
cout<< -1;
cout<< -2.5;
cout<< 27;
if(true){
    cout<< "dentro del if jeje";
    cout<< 2+2+2*10;
    double dentriif= 7.8;
}
cout<< "fuera del if";
double pruabool = 2.5;
int dentriif= 7;
bool tres= false;
char cuatro= 'a';
int cinco= 1;
char ff= 's';

int nuevo;
double dob_nuevo;
bool oo_nuevo;
char chNuevo;
string;
&
std::string str_nuevo;
cout<< 5 == 5;
std::string strff= "jjsjj";
cout<< 5 != 5;
cout<< 0<true;

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

