/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,10],$V2=[1,9],$V3=[1,11],$V4=[1,12],$V5=[1,13],$V6=[1,14],$V7=[1,15],$V8=[2,5,11,14,18,23,24,25,26,27],$V9=[1,26],$Va=[1,27],$Vb=[1,28],$Vc=[1,29],$Vd=[1,30],$Ve=[1,31],$Vf=[1,38],$Vg=[1,43],$Vh=[1,35],$Vi=[1,36],$Vj=[1,37],$Vk=[1,39],$Vl=[1,40],$Vm=[1,41],$Vn=[1,42],$Vo=[1,44],$Vp=[1,45],$Vq=[10,12,16,28,34,35,36,37,38,39,40,41,42],$Vr=[10,12,16,34,35,36,37,38],$Vs=[10,12,16,28,34,35,36,37,38,41];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"listainstr":4,"EOF":5,"instruccion":6,"variable":7,"instrif":8,"print":9,"puntoycoma":10,"COUT":11,"menorQue":12,"expresion":13,"IF":14,"abrirPar":15,"cerrarPar":16,"abrirLLAVE":17,"cerrarLLAVE":18,"tipos":19,"PALABRA_I":20,"t_declaracion":21,"IGUAL":22,"dobTipo":23,"intTipo":24,"charTipo":25,"boolTipo":26,"stringTipo":27,"MENOS":28,"CADENA":29,"CHAR":30,"BOOLEAN":31,"DOUBLE":32,"INT":33,"mayorIgual":34,"mayorQue":35,"menorIgual":36,"diferente":37,"dosIgual":38,"modulo":39,"DIVIDIR":40,"MAS":41,"POR":42,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"puntoycoma",11:"COUT",12:"menorQue",14:"IF",15:"abrirPar",16:"cerrarPar",17:"abrirLLAVE",18:"cerrarLLAVE",20:"PALABRA_I",22:"IGUAL",23:"dobTipo",24:"intTipo",25:"charTipo",26:"boolTipo",27:"stringTipo",28:"MENOS",29:"CADENA",30:"CHAR",31:"BOOLEAN",32:"DOUBLE",33:"INT",34:"mayorIgual",35:"mayorQue",36:"menorIgual",37:"diferente",38:"dosIgual",39:"modulo",40:"DIVIDIR",41:"MAS",42:"POR"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,2],[9,5],[8,7],[7,3],[21,3],[21,1],[19,1],[19,1],[19,1],[19,1],[19,1],[13,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3],[13,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = $$[$0-1]; tablaDeErrores.imprimirTablaE(); return this.$;  
break;
case 2:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3:
 this.$ = []; this.$.push($$[$0]); 
break;
case 4: case 5:
this.$ = $$[$0];
break;
case 6:
 this.$ = $$[$0]; 
break;
case 7:
this.$ = new Dato($$[$0-1], "ERROR", this._$.first_line  , this._$.first_column); tablaDeErrores.agregarError(new error($$[$0-1], "SINTACTICO", this._$.first_line  , this._$.first_column)); console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);
break;
case 8:
 this.$ = new Print($$[$0-1]); 
break;
case 9:
this.$ = new If($$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column);
break;
case 10:
  
        if ($$[$0] === "revisar") {
        if ($$[$0-2] === "DOUBLE") {
        dob_default = new Dato(0.0, TipoDato.DOUBLE, _$[$0-2].first_line, _$[$0-2].first_column);
        this.$ = new Variable($$[$0-1], $$[$0-2], dob_default, _$[$0-2].first_line, _$[$0-2].first_column);
        } else if ($$[$0-2] === "INT") {
        int_default = new Dato(0, TipoDato.INT, _$[$0-2].first_line, _$[$0-2].first_column);
        this.$ = new Variable($$[$0-1], $$[$0-2], int_default, _$[$0-2].first_line, _$[$0-2].first_column);
        } else if ($$[$0-2] === "CHAR") {
        char_default = new Dato('0', TipoDato.CHAR, _$[$0-2].first_line, _$[$0-2].first_column);    
        this.$ = new Variable($$[$0-1], $$[$0-2], char_default, _$[$0-2].first_line, _$[$0-2].first_column);
        } else if ($$[$0-2] === "BOOL") {
        bool_default = new Dato("true", TipoDato.BOOLEAN, _$[$0-2].first_line, _$[$0-2].first_column);      
        this.$ = new Variable($$[$0-1], $$[$0-2], bool_default, _$[$0-2].first_line, _$[$0-2].first_column);
        } else if ($$[$0-2] === "STD::STRING") {
        str_default = new Dato(" ", TipoDato.CADENA, _$[$0-2].first_line, _$[$0-2].first_column);          
        this.$ = new Variable($$[$0-1], $$[$0-2], str_default, _$[$0-2].first_line, _$[$0-2].first_column);
        } else {
        console.log("error sintactico");
        }
        } else {
        this.$ = new Variable($$[$0-1], $$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        }

        
break;
case 11:
 this.$ = $$[$0-1] 
break;
case 12:
 this.$ = "revisar" 
break;
case 13:
this.$="DOUBLE";
break;
case 14:
this.$="INT";
break;
case 15:
this.$="CHAR";
break;
case 16:
this.$="BOOL";
break;
case 17:
this.$="STD::STRING";
break;
case 18:
 this.$ = new Negativo($$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 19:
 this.$ = new Dato($$[$0], TipoDato.CADENA, _$[$0].first_line, _$[$0].first_column); 
break;
case 20:
 this.$ = new Dato($$[$0], TipoDato.CHAR, _$[$0].first_line, _$[$0].first_column); 
break;
case 21:
 this.$ = new Dato($$[$0], TipoDato.BOOLEAN, _$[$0].first_line, _$[$0].first_column); 
break;
case 22:
 this.$ = new Dato($$[$0], TipoDato.DOUBLE, _$[$0].first_line, _$[$0].first_column); 
break;
case 23:
 this.$ = new Dato($$[$0], TipoDato.INT, _$[$0].first_line, _$[$0].first_column); 
break;
case 24: case 25: case 26: case 27: case 28: case 29:
this.$ = new Relacionales($$[$0-2], $$[$0-1], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 30: case 31: case 32: case 33: case 34:
this.$ = new Aritmetica($$[$0-2], $$[$0-1], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,11:$V1,14:$V2,19:8,23:$V3,24:$V4,25:$V5,26:$V6,27:$V7},{1:[3]},{2:$V0,5:[1,16],6:17,7:4,8:5,9:6,11:$V1,14:$V2,19:8,23:$V3,24:$V4,25:$V5,26:$V6,27:$V7},o($V8,[2,3]),o($V8,[2,4]),o($V8,[2,5]),o($V8,[2,6]),{10:[1,18]},{20:[1,19]},{15:[1,20]},{12:[1,21]},{20:[2,13]},{20:[2,14]},{20:[2,15]},{20:[2,16]},{20:[2,17]},{1:[2,1]},o($V8,[2,2]),o($V8,[2,7]),{10:[1,24],21:22,22:[1,23]},{13:25,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{12:[1,32]},o($V8,[2,10]),{13:33,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},o($V8,[2,12]),{12:$Vf,16:[1,34],28:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp},{13:46,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},o($Vq,[2,19]),o($Vq,[2,20]),o($Vq,[2,21]),o($Vq,[2,22]),o($Vq,[2,23]),{13:47,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{10:[1,48],12:$Vf,28:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp},{17:[1,49]},{13:50,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:51,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:52,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:53,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:54,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:55,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:56,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:57,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:58,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:59,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},{13:60,28:$V9,29:$Va,30:$Vb,31:$Vc,32:$Vd,33:$Ve},o($Vq,[2,18]),{10:[1,61],12:$Vf,28:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp},o($V8,[2,11]),{2:$V0,4:62,6:3,7:4,8:5,9:6,11:$V1,14:$V2,19:8,23:$V3,24:$V4,25:$V5,26:$V6,27:$V7},o($Vr,[2,24],{28:$Vg,39:$Vm,40:$Vn,41:$Vo,42:$Vp}),o($Vr,[2,25],{28:$Vg,39:$Vm,40:$Vn,41:$Vo,42:$Vp}),o($Vr,[2,26],{28:$Vg,39:$Vm,40:$Vn,41:$Vo,42:$Vp}),o($Vr,[2,27],{28:$Vg,39:$Vm,40:$Vn,41:$Vo,42:$Vp}),o($Vr,[2,28],{28:$Vg,39:$Vm,40:$Vn,41:$Vo,42:$Vp}),o($Vr,[2,29],{28:$Vg,39:$Vm,40:$Vn,41:$Vo,42:$Vp}),o($Vq,[2,30]),o($Vq,[2,31]),o($Vs,[2,32],{39:$Vm,40:$Vn,42:$Vp}),o($Vs,[2,33],{39:$Vm,40:$Vn,42:$Vp}),o($Vq,[2,34]),o($V8,[2,8]),{2:$V0,6:17,7:4,8:5,9:6,11:$V1,14:$V2,18:[1,63],19:8,23:$V3,24:$V4,25:$V5,26:$V6,27:$V7},o($V8,[2,9])],
defaultActions: {11:[2,13],12:[2,14],13:[2,15],14:[2,16],15:[2,17],16:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "COUT";
break;
case 1:return "IF";
break;
case 2:return "dosIgual";
break;
case 3:return  "menorIgual"; 
break;
case 4:return  "mayorIgual"; 
break;
case 5:return  "diferente"; 
break;
case 6:return "MAS";
break;
case 7:return "POR";
break;
case 8:return "IGUAL";
break;
case 9:return "DIVIDIR";
break;
case 10:return "MENOS";
break;
case 11:return "potencia";
break;
case 12:return "modulo";
break;
case 13:return "dobTipo"; 
break;
case 14:return "intTipo"; 
break;
case 15:return "charTipo"; 
break;
case 16:return "boolTipo"; 
break;
case 17:return "stringTipo"; 
break;
case 18:return "abrirPar"; 
break;
case 19:return  "cerrarPar"; 
break;
case 20:return "abrirLLAVE"; 
break;
case 21:return "cerrarLLAVE"; 
break;
case 22:return  "puntoycoma"; 
break;
case 23:return  "menorQue"; 
break;
case 24:return  "mayorQue"; 
break;
case 25:return  "exclamacion"; 
break;
case 26:return 32;
break;
case 27:return 33;
break;
case 28:return 31;
break;
case 29: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 30; 
break;
case 30: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 29; 
break;
case 31:return 20;
break;
case 32:/* Espacios se ignoran */
break;
case 33:return 5;
break;
case 34: console.error('Error léxico: \"' + yy_.yytext + '\", linea: ' + yy_.yylloc.first_line + ', columna: ' + yy_.yylloc.first_column); 
    tablaDeErrores.agregarError(new error(yy_.yytext, "LEXICO", yy_.yylloc.first_line , yy_.yylloc.first_column));
 
break;
}
},
rules: [/^(?:cout\b)/i,/^(?:if\b)/i,/^(?:==)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:!=)/i,/^(?:\+)/i,/^(?:\*)/i,/^(?:=)/i,/^(?:\/)/i,/^(?:-)/i,/^(?:pow\b)/i,/^(?:%)/i,/^(?:double\b)/i,/^(?:int\b)/i,/^(?:char\b)/i,/^(?:bool\b)/i,/^(?:std::string\b)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:;)/i,/^(?:<)/i,/^(?:>)/i,/^(?:!)/i,/^(?:[0-9]+[.][0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:(true|false)\b)/i,/^(?:'[^\']')/i,/^(?:"[^\"]*")/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:[ \s\r\n\t])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}