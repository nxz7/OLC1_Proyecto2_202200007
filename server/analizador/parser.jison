// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares



comentario_multi [\/][\*][^\*\/]+[\*][\/];
comentario_una [\/][\/][^\n]+;



%%
// -----> Reglas Lexicas
"cout"       {return "COUT";}
"if"            {return "IF";}
"+"             {return "MAS";}
"*"             {return "POR";}
"="             {return "IGUAL";}
"/"             {return "DIVIDIR";}
"-"             {return "MENOS";}
"pow"           {return "potencia";}
"%"             {return "modulo";}


"("             {return "abrirPar"; }
")"             {return  "cerrarPar"; }
"{"             {return "abrirLLAVE"; }
"}"             {return "cerrarLLAVE"; }
";"             {return  "puntoycoma"; }
"<"             {return  "menorQue"; }
">"             {return  "mayorQue"; }
"!"             {return  "exclamacion"; }

[0-9]+[.][0-9]+\b    return 'DOUBLE';
[0-9]+\b                return 'INT';
("true"|"false")\b      return 'BOOLEAN';
\'[^\']\'               { yytext = yytext.substr(1,yyleng-2); return 'CHAR'; }

\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; }  
  


([a-zA-Z])[a-zA-Z0-9_]*	return 'PALABRA_I';

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
<<EOF>>               return 'EOF';
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column); 
    tablaDeErrores.agregarError(new error(yytext, "LEXICO", yylloc.first_line , yylloc.first_column));
 }


/lex
// ################## ANALIZADOR SINTACTICO ######################
// -------> Precedencia
%{
    const { TipoDato } = require("../interprete/Expresion.js");
    const Dato = require("../interprete/expresion/Dato.js");
    const Negativo = require("../interprete/expresion/Negativo.js");
    const Aritmetica = require("../interprete/expresion/Aritmetica.js");

    const Print = require("../interprete/instruccion/Print.js");
    const If = require("../interprete/instruccion/If.js");

    const tablaError = require('../interprete/Errores/tablaError.js');
    const error = require('../interprete/Errores/error.js');
    const tablaDeErrores = new tablaError();
%}    


%left 'MAS','MENOS'
%left 'POR','DIVIDIR', 'modulo'
%right UMENOS

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: listainstr EOF {$$ = $1; tablaDeErrores.imprimirTablaE(); return $$;  }
;

listainstr 
    : listainstr instruccion        { $$ = $1; $$.push($2); }
    | instruccion                   { $$ = []; $$.push($1); }
;

instruccion
    : instrif       {$$ = $1}
	| print         { $$ = $1; }   
	| error puntoycoma	{$$ = new Dato($1, "ERROR", this._$.first_line  , this._$.first_column); tablaDeErrores.agregarError(new error($1, "SINTACTICO", this._$.first_line  , this._$.first_column)); console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print 
    : COUT menorQue menorQue expresion puntoycoma   { $$ = new Print($4); }
;

instrif
	: IF abrirPar expresion cerrarPar abrirLLAVE listainstr  cerrarLLAVE    	{$$ = new If($3, $6, @1.first_line, @1.first_column);}
;

expresion
	: MENOS expresion %prec UMENOS  { $$ = new Negativo($2, @1.first_line, @1.first_column); } 
    | CADENA    { $$ = new Dato($1, TipoDato.CADENA, @1.first_line, @1.first_column); }
    | CHAR  { $$ = new Dato($1, TipoDato.CHAR, @1.first_line, @1.first_column); }
    | BOOLEAN   { $$ = new Dato($1, TipoDato.BOOLEAN, @1.first_line, @1.first_column); }
    | DOUBLE    { $$ = new Dato($1, TipoDato.DOUBLE, @1.first_line, @1.first_column); }   
    | INT   { $$ = new Dato($1, TipoDato.INT, @1.first_line, @1.first_column); }
    | expresion modulo expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion DIVIDIR expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion MENOS expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion MAS expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion POR expresion       {$$ = new Aritmetica($1, $2, $3);}
;
