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
"=="             {return "dosIgual";}
"<="             {return  "menorIgual"; }
">="             {return  "mayorIgual"; }
"!="             {return  "diferente"; }
"+"             {return "MAS";}
"*"             {return "POR";}
"="             {return "IGUAL";}
"/"             {return "DIVIDIR";}
"-"             {return "MENOS";}
"pow"           {return "potencia";}
"%"             {return "modulo";}

"double"            {return "dobTipo"; }
"int"            {return "intTipo"; }
"char"            {return "charTipo"; }
"bool"            {return "boolTipo"; }
"std::string"            {return "stringTipo"; }

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
    const Relacionales = require("../interprete/expresion/Relacionales.js");

    const Print = require("../interprete/instruccion/Print.js");
    const If = require("../interprete/instruccion/If.js");
    const Variable = require("../interprete/instruccion/Variable.js");


    const tablaError = require('../interprete/Errores/tablaError.js');
    const error = require('../interprete/Errores/error.js');
    const tablaDeErrores = new tablaError();
%}    

%left 'dosIgual','menorQue','mayorQue','menorIgual','mayorIgual','diferente'
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
    : variable       {$$ = $1;}
    | instrif       {$$ = $1;}
	| print         { $$ = $1; }   
	| error puntoycoma	{$$ = new Dato($1, "ERROR", this._$.first_line  , this._$.first_column); tablaDeErrores.agregarError(new error($1, "SINTACTICO", this._$.first_line  , this._$.first_column)); console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print 
    : COUT menorQue menorQue expresion puntoycoma   { $$ = new Print($4); }
;

instrif
	: IF abrirPar expresion cerrarPar abrirLLAVE listainstr  cerrarLLAVE    	{$$ = new If($3, $6, @1.first_line, @1.first_column);}
;

variable
    : tipos PALABRA_I t_declaracion {  
        if ($3 === "revisar") {
        if ($1 === "DOUBLE") {
        dob_default = new Dato(0.0, TipoDato.DOUBLE, @1.first_line, @1.first_column);
        $$ = new Variable($2, $1, dob_default, @1.first_line, @1.first_column);
        } else if ($1 === "INT") {
        int_default = new Dato(0, TipoDato.INT, @1.first_line, @1.first_column);
        $$ = new Variable($2, $1, int_default, @1.first_line, @1.first_column);
        } else if ($1 === "CHAR") {
        char_default = new Dato('0', TipoDato.CHAR, @1.first_line, @1.first_column);    
        $$ = new Variable($2, $1, char_default, @1.first_line, @1.first_column);
        } else if ($1 === "BOOL") {
        bool_default = new Dato("true", TipoDato.BOOLEAN, @1.first_line, @1.first_column);      
        $$ = new Variable($2, $1, bool_default, @1.first_line, @1.first_column);
        } else if ($1 === "STD::STRING") {
        str_default = new Dato(" ", TipoDato.CADENA, @1.first_line, @1.first_column);          
        $$ = new Variable($2, $1, str_default, @1.first_line, @1.first_column);
        } else {
        console.log("error sintactico");
        }
        } else {
        $$ = new Variable($2, $1, $3, @1.first_line, @1.first_column);
        }

        }
;

t_declaracion
    :IGUAL expresion puntoycoma { $$ = $2 }
    |puntoycoma { $$ = "revisar" }
    ;

tipos
    :dobTipo {$$="DOUBLE";}
    |intTipo {$$="INT";}
    |charTipo {$$="CHAR";}
    |boolTipo {$$="BOOL";}
    |stringTipo {$$="STD::STRING";}
;

expresion
	: MENOS expresion %prec UMENOS  { $$ = new Negativo($2, @1.first_line, @1.first_column); }
    | CADENA    { $$ = new Dato($1, TipoDato.CADENA, @1.first_line, @1.first_column); }
    | CHAR  { $$ = new Dato($1, TipoDato.CHAR, @1.first_line, @1.first_column); }
    | BOOLEAN   { $$ = new Dato($1, TipoDato.BOOLEAN, @1.first_line, @1.first_column); }
    | DOUBLE    { $$ = new Dato($1, TipoDato.DOUBLE, @1.first_line, @1.first_column); }   
    | INT   { $$ = new Dato($1, TipoDato.INT, @1.first_line, @1.first_column); }
    | expresion mayorIgual expresion       {$$ = new Relacionales($1, $2, $3, @1.first_line, @1.first_column);} 
    | expresion mayorQue expresion       {$$ = new Relacionales($1, $2, $3, @1.first_line, @1.first_column);} 
    | expresion menorIgual expresion       {$$ = new Relacionales($1, $2, $3, @1.first_line, @1.first_column);} 
    | expresion menorQue expresion       {$$ = new Relacionales($1, $2, $3, @1.first_line, @1.first_column);}  
    | expresion diferente expresion       {$$ = new Relacionales($1, $2, $3, @1.first_line, @1.first_column);}  
    | expresion dosIgual expresion       {$$ = new Relacionales($1, $2, $3, @1.first_line, @1.first_column);}  
    | expresion modulo expresion       {$$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column);}
    | expresion DIVIDIR expresion       {$$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column);}
    | expresion MENOS expresion       {$$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column);}
    | expresion MAS expresion       {$$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column);}
    | expresion POR expresion       {$$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column);}
;
