// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares



comentario_multi [\/][\*][^\*\/]+[\*][\/];
comentario_una [\/][\/][^\n]+;



%%
// -----> Reglas Lexicas
"cout"       {return "COUT";}

"+"             {return "MAS";}
"*"             {return "POR";}
"="             {return "IGUAL";}
"/"             {return "DIVIDIR";}
"-"             {return "MENOS";}
"pow"           {return "potencia";}
"%"             {return "modulo";}


"("             {return "abrirPar"; }
")"             {return  "cerrarPar"; }
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
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
// -------> Precedencia
%{
    const Dato = require("../interprete/expresion/Dato.js");
    const Print = require("../interprete/instruccion/Print.js");
    const Aritmetica = require("../interprete/expresion/Aritmetica.js");
%}    


%left 'MAS','MENOS'
%left 'POR','DIVIDIR', 'modulo'


// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: listainstr EOF {$$ = $1; return $$; }
;

listainstr 
    : listainstr instruccion        { $$ = $1; $$.push($2); }
    | instruccion                   { $$ = []; $$.push($1); }
;

instruccion
	: print         { $$ = $1; }   
	| error puntoycoma	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print 
    : COUT menorQue menorQue expresion puntoycoma   { $$ = new Print($4); }
;

expresion 
    : CADENA    { $$ = new Dato($1, 'STD::STRING'); }
    | CHAR  { $$ = new Dato($1, 'CHAR'); }
    | BOOLEAN   { $$ = new Dato($1, 'BOOL'); }
    | DOUBLE    { $$ = new Dato($1, 'DOUBLE'); }   
    | INT   { $$ = new Dato($1, 'INT'); }
    | expresion modulo expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion DIVIDIR expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion MENOS expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion MAS expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion POR expresion       {$$ = new Aritmetica($1, $2, $3);}
;
