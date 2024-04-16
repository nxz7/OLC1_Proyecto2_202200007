// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares






%%
// -----> Reglas Lexicas
[\/][\/][^\n]+ {/* se ignoran */}
[[\/][\*][^\*\/]+[\*][\/]] {/* se ignoran */}
"for"       {return "FORFOR";}

";"             {return  "puntoycoma"; }
"cout"       {return "COUT";}
"std::toString" {return "TOSTRING";}
"execute"       {return "EXECUTE";}
"tolower"       {return "TOLOWER";}
"toupper"       {return "TOUPPER";}
"do"       {return "DO";}
"round"       {return "ROUND";}
".length()"     {return "FLENGTH";}
".c_str()"    {return "VCHAR";}

"typeof"       {return "TYPEOF";}

"while"       {return "WHILE";}
"void"       {return "VOID";}
"endl"       {return "endl";}
"if"            {return "IF";}
"else"            {return "ELSE";}
"<<"             {return  "CorImp"; }
"[][]"             {return "dosCor";}
"++"             {return "MASmas";}
"--"             {return "MENOSmenos";}
"=="             {return "dosIgual";}
"<="             {return  "menorIgual"; }
">="             {return  "mayorIgual"; }
"!="             {return  "diferente"; }
"&&"             {return  "And"; }
"||"             {return  "oSigno"; }
"+"             {return "MAS";}
"*"             {return "POR";}
"="             {return "IGUAL";}
"/"             {return "DIVIDIR";}
"-"             {return "MENOS";}
"pow"           {return "potencia";}
"%"             {return "modulo";}
":"             {return "dosPuntos";}
"new"            {return "new"; }
"double"            {return "dobTipo"; }
"int"            {return "intTipo"; }
"char"            {return "charTipo"; }
"bool"            {return "boolTipo"; }
"std::string"            {return "stringTipo"; }
"!"             {return  "exclamacion"; }
"("             {return "abrirPar"; }
")"             {return  "cerrarPar"; }
"{"             {return "abrirLLAVE"; }
"}"             {return "cerrarLLAVE"; }

"<"             {return  "menorQue"; }
">"             {return  "mayorQue"; }
"?"             {return  "interrogracion"; }
","             {return  "coma"; }
"["             {return  "abrirCor"; }
"]"             {return  "cerrarCor"; }




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
        const id = require("../interprete/expresion/id.js");
    const Ternario = require("../interprete/expresion/ternario.js");
    const Logicos = require("../interprete/expresion/Logicos.js");
    const Not = require("../interprete/expresion/Not.js");
    const Negativo = require("../interprete/expresion/Negativo.js");
    const IncDec = require("../interprete/expresion/IncDec.js");
    const Aritmetica = require("../interprete/expresion/Aritmetica.js");
    const Relacionales = require("../interprete/expresion/Relacionales.js");
    const id_arreglo = require("../interprete/expresion/id_arreglo.js");
    const Potencia = require("../interprete/expresion/Potencia.js");
    const Casteos = require("../interprete/expresion/Casteos.js");
    const lower = require("../interprete/expresion/lower.js");
    const Mod_vector=require("../interprete/expresion/Mod_vector.js");
    const upper = require("../interprete/expresion/upper.js");
    const round = require("../interprete/expresion/round.js");
    const TypeOf = require("../interprete/expresion/TypeOf.js");
    const toString = require("../interprete/expresion/toString.js");
    const Length = require("../interprete/expresion/Length.js");
    const cstr = require("../interprete/expresion/cstr.js");

    const Print = require("../interprete/instruccion/Print.js");
    const If = require("../interprete/instruccion/If.js");
    const Variable = require("../interprete/instruccion/Variable.js");
const inst_IncDec = require("../interprete/instruccion/inst_IncDec.js");
    const Vector = require("../interprete/instruccion/Vector.js");
   const Vector2D = require("../interprete/instruccion/Vector2D.js");
   const Funcion = require("../interprete/instruccion/Funcion.js");
      const run_funcion = require("../interprete/instruccion/run_funcion.js");
    const Varias_var = require("../interprete/instruccion/Varias_var.js");
    const Metodo = require("../interprete/instruccion/Metodo.js");
    const execute = require("../interprete/instruccion/execute.js");
    const While = require("../interprete/instruccion/While.js");
    const do_while = require("../interprete/instruccion/do_while.js");
    const For = require("../interprete/instruccion/For.js");

    const tablaError = require('../interprete/Errores/tablaError.js');
    const error = require('../interprete/Errores/error.js');
    const tablaDeErrores = new tablaError();
    let par =[];
    let arreglo = "";
    let varias_variables = [];

    let tipoArreglo = "";
    let accesoUno = "";
    let accesoDos = "";
    let totalDos = null;
    let datoDos = null;
    let mat2=null;

    //if
    let Ielse_if =[];
    let Ielse=[];
    let cond_ifElse=null;
    let cond_else=null;

%}


%left  'MASmas', 'MENOSmenos'
%left   'interrogracion'
%left   'oSigno'
%left   'And'
%right UEX
%left 'dosIgual','menorQue','mayorQue','menorIgual','mayorIgual','diferente'
%left 'MAS','MENOS'
%left 'POR','DIVIDIR', 'modulo'
%left 'abrirPar' 'cerrarPar' 'abrirCor' 'cerrarCor'

%right UMENOS

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: listainstr EOF {$$ = $1; tablaDeErrores.imprimirTablaE(); tablaDeErrores.clearTablaError(); return $$;  }
;

listainstr 
    : listainstr instruccion        { $$ = $1; $$.push($2); }
    | instruccion                   { $$ = []; $$.push($1); }
;

instruccion
    : variable       {$$ = $1;} //tambien tiene funcion porque inicial con tipo
    | metodos        {$$ = $1;}
    | print         { $$ = $1; } 
    | instrif       {$$ = $1;}
    | intrWhile     {$$ = $1;}
    | yey_for     {$$ = $1;}
    | inst_DoWhile  {$$ = $1;}
    | exp_InDec     {$$ = $1;}  //tambien tiene lo de llamadas a FUNC/metodos 
    | run_exe       {$$ = $1;}
    | error puntoycoma	{$$ = new Dato($1, "ERROR", this._$.first_line  , this._$.first_column); tablaDeErrores.agregarError(new error($1, "SINTACTICO", this._$.first_line  , this._$.first_column)); console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
    |error abrirLLAVE	{$$ = new Dato($1, "ERROR", this._$.first_line  , this._$.first_column); tablaDeErrores.agregarError(new error($1, "SINTACTICO", this._$.first_line  , this._$.first_column)); console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;

yey_for
:FORFOR abrirPar ml_for expresion puntoycoma ml_actualizacion cerrarPar abrirLLAVE listainstr  cerrarLLAVE {$$= new For($3,$4,$6, $9, this._$.first_line  , this._$.first_column);}
;

ml_for
: variable {$$=$1;}
| expresion puntoycoma {$$=$1;}
;

ml_actualizacion
    : PALABRA_I MASmas    {$$ = new inst_IncDec($1, $2, @1.first_line, @1.first_column);}
    | PALABRA_I MENOSmenos {$$ = new inst_IncDec($1, $2, @1.first_line, @1.first_column);}
;



inst_DoWhile
: DO abrirLLAVE listainstr  cerrarLLAVE WHILE abrirPar expresion cerrarPar puntoycoma {$$= new do_while($7,$3,@1.first_line, @1.first_column);}
;


intrWhile
    :WHILE abrirPar expresion cerrarPar abrirLLAVE listainstr  cerrarLLAVE {$$= new While($3,$6,@1.first_line, @1.first_column);}
;


//METODOS CON VOID Y SIN PARAMETROS (tipoF, id, instrucciones,fila, columna)
metodos         
    : VOID PALABRA_I abrirPar  lista_int cerrarPar abrirLLAVE listainstr  cerrarLLAVE { $$ = new Metodo($1,$2,$4,$7,@1.first_line, @1.first_column);}
;

run_exe 
    : EXECUTE PALABRA_I abrirPar llamarMoF {$$ = new execute($2,$4, @1.first_line, @1.first_column);}
;

print 
    : COUT CorImp expresion tipos_print  { $$ = new Print($3,$4, @1.first_line, @1.first_column); }
;

tipos_print
    : puntoycoma { $$ = null;  }
    | CorImp endl puntoycoma { $$ = "salto"; }
;

instrif                                                                                     
	: IF abrirPar expresion cerrarPar abrirLLAVE listainstr  cerrarLLAVE siguiente_if   	{$$ = new If($3, $6, Ielse_if,cond_ifElse,Ielse,cond_else ,@1.first_line, @1.first_column);  cond_else=null;cond_ifElse=null;Ielse=[];Ielse_if =[]; }
;

siguiente_if
: ELSE prod_if_esle {$$=$2;}
| { $$ = null;  Ielse_if=null; Ielse=null;  cond_ifElse=null; cond_else=null}
;



prod_if_esle
: IF abrirPar expresion cerrarPar abrirLLAVE listainstr  cerrarLLAVE ultimo_else {cond_ifElse=$3; Ielse_if=$6; $$=$6;}
| abrirLLAVE listainstr  cerrarLLAVE {Ielse=$2; cond_else="else"; cond_ifElse=null; Ielse_if=null; $$ = $2; }
;

ultimo_else
:  ELSE abrirLLAVE listainstr  cerrarLLAVE {Ielse=$3; cond_else="else"; $$ = $3; }
| { Ielse=null; cond_else=null; $$ = null;  }
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
        } 
        else if (arreglo=="1D1" && $3!= "revisar"){
            $$ = new Vector($2,$1,$1,"LISTA",$3,@1.first_line, @1.first_column);
            arreglo="";
        }
        else if (arreglo=="FUNCION_LISTA" && $3!= "revisar"){
            $$ = new Vector($2,$1,$1,"FUNCION_LISTA",$3,@1.first_line, @1.first_column);
            arreglo="";
        } 
        else if (arreglo=="1D2" && $3!="revisar"){
            $$ = new Vector($2,$1,tipoArreglo,"DEF",$3,@1.first_line, @1.first_column);
            arreglo="";
            tipoArreglo="";
        } 
        else if (arreglo=="matriz1" && $3!="revisar"){
           $$ = new Vector2D($2,$1,tipoArreglo,"DEF",$3,datoDos,@1.first_line, @1.first_column);
           arreglo="";
            tipoArreglo="";
           datoDos=null;
        }
        else if (arreglo=="matriz2" && $3!="revisar"){
            $$ = new Vector2D($2,$1,$1,"LISTA",$3,mat2,@1.first_line, @1.first_column);
            arreglo="";
            tipoArreglo="";
            mat2=null;
        } else if (arreglo=="FUNCION" && $3!="revisar") {
            $$ = new Funcion ($1,$2,par,$3,@1.first_line, @1.first_column);
            arreglo="";
            par ="";
        }else if (arreglo=="listaDeVar" && $3!="revisar") {
            varias_variables.push($2)
            $$ = new Varias_var(varias_variables, $1, $3, @1.first_line, @1.first_column);
            arreglo="";
            varias_variables=[];
        }

        else { 
            if (arreglo == null){
        $$ = new Variable($2, $1, $3, @1.first_line, @1.first_column);
        arreglo="";}
        }

        }
;


t_declaracion
    :IGUAL expresion puntoycoma { $$ = $2; arreglo=null;}
    |coma lista_var IGUAL expresion puntoycoma {arreglo="listaDeVar"; varias_variables=$2; $$ = $4; }
    |puntoycoma { $$ = "revisar"; }
    |abrirCor cerrarCor IGUAL arreglo { $$ = $4; }
    |dosCor IGUAL doble_arreglo { $$ = $3; }
    |abrirPar lista_int cerrarPar abrirLLAVE listainstr  cerrarLLAVE {par = $2 ; arreglo="FUNCION"; $$ =$5;}
    ;

lista_var
    :lista_var coma PALABRA_I {$$ = $1; $$.push($3);}
    | PALABRA_I {$$ = []; $$.push($1);}
;

lista_int
    : lista_int coma tipos PALABRA_I {$$ = $1; $$.push($3); $$.push($4);}
    | tipos PALABRA_I {$$ = []; $$.push($1); $$.push($2);}
    | {$$=null;}
;


doble_arreglo
    :new tipos abrirCor expresion cerrarCor abrirCor expresion cerrarCor puntoycoma  { arreglo="matriz1"; tipoArreglo=$2; datoDos=$7; $$=$4; }
    | abrirCor abrirCor LISTA_ELEMENTOS cerrarCor coma abrirCor LISTA_ELEMENTOS cerrarCor cerrarCor puntoycoma {arreglo="matriz2"; mat2=$7; $$ = $3; }
;



arreglo
    : new tipos abrirCor expresion cerrarCor puntoycoma {arreglo="1D2"; tipoArreglo=$2; $$=$4;}
    | abrirCor LISTA_ELEMENTOS cerrarCor puntoycoma { arreglo="1D1";$$=$2;}
    | PALABRA_I VCHAR { arreglo="FUNCION_LISTA"; $$ = new cstr($1, @1.first_line, @1.first_column);}
;


tipos
    :dobTipo {$$="DOUBLE";}
    |intTipo {$$="INT";}
    |charTipo {$$="CHAR";}
    |boolTipo {$$="BOOL";}
    |stringTipo {$$="STD::STRING";}
;



LISTA_ELEMENTOS
    :LISTA_ELEMENTOS coma DATOS {$$ = $1; $$.push($3); }
    |DATOS {$$ = []; $$.push($1);}
;


expresion
	: MENOS expresion %prec UMENOS  { $$ = new Negativo($2, @1.first_line, @1.first_column); }
    | exclamacion expresion %prec UEX {$$ = new Not($2, @1.first_line, @1.first_column);}
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
    | expresion oSigno expresion       {$$ = new Logicos($1, $2, $3, @1.first_line, @1.first_column);}
    | expresion And expresion       {$$ = new Logicos($1, $2, $3, @1.first_line, @1.first_column);}
    | expresion interrogracion expresion  dosPuntos expresion   {$$ = new Ternario($1, $3, $5, @1.first_line, @1.first_column);}
    | expresion MASmas   {$$ = new IncDec($1, $2, @1.first_line, @1.first_column);}
    | expresion MENOSmenos {$$ = new IncDec($1, $2, @1.first_line, @1.first_column);}
    | TOLOWER abrirPar expresion cerrarPar {$$= new lower($3,@1.first_line, @1.first_column);}
    | TOUPPER abrirPar expresion cerrarPar {$$= new upper($3,@1.first_line, @1.first_column);}
    | ROUND abrirPar expresion cerrarPar {$$= new round($3,@1.first_line, @1.first_column);}
    | TOSTRING abrirPar expresion cerrarPar {$$= new toString($3,@1.first_line, @1.first_column);}
    | TYPEOF abrirPar PALABRA_I cerrarPar {$$= new TypeOf($3,@1.first_line, @1.first_column);}        
    | potencia abrirPar expresion coma expresion cerrarPar {$$=new Potencia($3,$5,@1.first_line, @1.first_column);}
    | abrirPar parentesis_exp {$$=$2;}
    | PALABRA_I palabras {
        arreglo ="";

        if(totalDos!=null){
            $$= new id_arreglo($1,$2,totalDos, @1.first_line, @1.first_column);
            totalDos=null;
            arreglo ="";
            accesoDos=null;
        }
        else if(accesoUno=="unaDim" && totalDos==null){
            $$= new id_arreglo($1,$2,null, @1.first_line, @1.first_column);
            accesoUno="";
            totalDos=null;
            arreglo ="";
            accesoDos=null;
        } else if ($2 == "LARGO" && totalDos==null && accesoUno==null && accesoDos ==null ){
            $$ = new Length ($1, @1.first_line, @1.first_column);
        }else if ($2 == "vectCHAR" && totalDos==null && accesoUno==null && accesoDos ==null ){
            $$ = new cstr ($1, @1.first_line, @1.first_column);
        }
        else{
        $$ = new id($1, @1.first_line, @1.first_column);
    }
    }
    
;

parentesis_exp
    :expresion  cerrarPar {$$=$1;}
    |tipos cerrarPar expresion {$$=new Casteos($3,$1,@1.first_line, @1.first_column);}
;

palabras
    :abrirCor expresion cerrarCor amb_palabras {
        if (accesoDos =="dosDim"){
            $$=$2;
        }else{
            accesoUno="unaDim";
            $$=$2;
            totalDos=null;
        }
    }
    |FLENGTH {totalDos=null;accesoUno=null; accesoDos =null; $$="LARGO";}
    |VCHAR {totalDos=null;accesoUno=null; accesoDos =null; $$="vectCHAR";}
    |{$$=null;}
;

amb_palabras
    : abrirCor expresion cerrarCor {accesoDos="dosDim"; totalDos=$2; $$=$2;}
    | {accesoDos=null; $$=null;}
;

exp_InDec
    : PALABRA_I MASmas  puntoycoma  {$$ = new inst_IncDec($1, $2, @1.first_line, @1.first_column);}
    | PALABRA_I MENOSmenos puntoycoma {$$ = new inst_IncDec($1, $2, @1.first_line, @1.first_column);}
    | PALABRA_I abrirPar llamarMoF {$$= new run_funcion($1,$3, @1.first_line, @1.first_column);}
    | PALABRA_I abrirCor expresion cerrarCor vect_2d IGUAL expresion puntoycoma {$$= new Mod_vector($1,$3,$5,$7, @1.first_line, @1.first_column);}
;

llamarMoF
    :cerrarPar puntoycoma {$$=null}
    |lista_par cerrarPar puntoycoma {$$=$1;}
;

vect_2d
    :abrirCor expresion cerrarCor {$$=$2;}
    |{$$=null;}
;

lista_par
    :lista_par coma expresion {$$ = $1; $$.push($3); }
    |expresion {$$ = []; $$.push($1);}
    ;


DATOS
    : CADENA    { $$ = new Dato($1, TipoDato.CADENA, @1.first_line, @1.first_column); }
    | CHAR  { $$ = new Dato($1, TipoDato.CHAR, @1.first_line, @1.first_column); }
    | BOOLEAN   { $$ = new Dato($1, TipoDato.BOOLEAN, @1.first_line, @1.first_column); }
    | DOUBLE    { $$ = new Dato($1, TipoDato.DOUBLE, @1.first_line, @1.first_column); }   
    | INT   { $$ = new Dato($1, TipoDato.INT, @1.first_line, @1.first_column); }
    | PALABRA_I {$$ = new id($1, @1.first_line, @1.first_column);}
;