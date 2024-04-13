const { Expresion, TipoDato } = require("../Expresion");
const StringBuilder = require('../StringBuilder.js');
const NodoAst_1 = require("../Simbolos/NodoAst");

class Aritmetica extends Expresion{
    constructor(expIzq, operador, expDer, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;

    }

    getNodo() {
        let nodo = new NodoAst_1.NodoAst('EXPRESION - ARITMETICA');
        nodo.agregarHijoAST(this.expIzq.getNodo());
        if (this.operador == "+") {
            nodo.agregarHijo('+');
        }
        else if (this.operador == "-") {
            nodo.agregarHijo('-');
        }
        else if (this.operador == "/") {
            nodo.agregarHijo('/');
        }
        else if (this.operador == "*") {
            nodo.agregarHijo('*');
        }
        else if (this.operador == "%") {
            nodo.agregarHijo('%');
        }
        nodo.agregarHijoAST(this.expDer.getNodo());
        return nodo;
    }



    interpretar(entorno,tablaDeSimbolos,sb){


        let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos,sb);
        let valorDer = this.expDer.interpretar(entorno,tablaDeSimbolos,sb);


        if(this.operador == "+"){
            //INT - INT
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            //DOUBLR -INT
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
                (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return parseFloat(this.valor);
            } //INT - STRING
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "STD::STRING") ||
                (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "INT")) {
                this.tipo = 'STD::STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }//int - bool
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL") ||
            (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT")) {
            this.tipo = 'INT';
            this.valor = valorIzq + valorDer;
            return Number(this.valor);
        } //DOUBLE - DOUEBLE
        else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq + valorDer;
            return parseFloat(this.valor);
        }//DOUBLE - BOOL
        else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL") ||
        (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE")) {
        this.tipo = 'DOUBLE';
        this.valor = valorIzq + valorDer;
        return parseFloat(this.valor);
        }//double - cadena
        else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "STD::STRING") ||
        (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "DOUBLE")) {
        this.tipo = 'STD::STRING';
        this.valor = valorIzq + valorDer;
        return this.valor;
        } //BOOL - CADENA 
        else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "STD::STRING") ||
        (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "BOOL")) {
        this.tipo = 'STD::STRING';
        this.valor = valorIzq + valorDer;
        return this.valor;
        } //CADENA - CADENA
        else if (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "STD::STRING") {
            this.tipo = 'STD::STRING';
            this.valor = valorIzq + valorDer;
            return this.valor;
        } //cadena -char
        else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "STD::STRING") ||
        (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "CHAR")) {
        this.tipo = 'STD::STRING';
        this.valor = valorIzq + valorDer;
        return this.valor;
        } //char y char
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
            this.tipo = 'STD::STRING';
            this.valor = valorIzq + valorDer;
            return this.valor;
        }//char e int
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") {
        this.tipo = 'INT';
        this.valor = valorIzq.charCodeAt(0) + valorDer;
        return Number(this.valor);
        }
        else if (this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") {
            this.tipo = 'INT';
            this.valor = valorIzq + valorDer.charCodeAt(0);
            return Number(this.valor);
            }
            //CHAR Y DOUBLE
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") {
                this.tipo = 'DOUBLE';
                this.valor = valorIzq.charCodeAt(0) + valorDer;
                return parseFloat(this.valor);
                }
        else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") {
                    this.tipo = 'DOUBLE';
                    this.valor = valorIzq + valorDer.charCodeAt(0);
                    return parseFloat(this.valor);
                }

            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                sb.append("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                return this.valor;
            }
        }

        else if(this.operador == "*"){

            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
                this.tipo = 'DOUBLE';
                this.valor = valorIzq * valorDer;
                return parseFloat(this.valor);
            }
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE") ||
            (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT")) {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq * valorDer;
            return parseFloat(this.valor);
            }
//char e int
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") {
            this.tipo = 'INT';
            this.valor = valorIzq.charCodeAt(0) * valorDer;
            return Number(this.valor);
            }
            else if (this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") {
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer.charCodeAt(0);
                return Number(this.valor);
                }
                //CHAR Y DOUBLE
            else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") {
                    this.tipo = 'DOUBLE';
                    this.valor = valorIzq.charCodeAt(0) * valorDer;
                    return parseFloat(this.valor);
                    }
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") {
                        this.tipo = 'DOUBLE';
                        this.valor = valorIzq * valorDer.charCodeAt(0);
                        return parseFloat(this.valor);
                    }

            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                sb.append("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                return this.valor;
            }
        }


        else if (this.operador == "-"){ 
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            //DOUBLR -INT
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
                (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return parseFloat(this.valor);
            } //int - bool
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL") ||
            (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT")) {
            this.tipo = 'INT';
            this.valor = valorIzq - valorDer;
            return Number(this.valor);

            } //DOUBLE - DOUEBLE
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq - valorDer;
            return parseFloat(this.valor);
        }//DOUBLE - BOOL
        else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL") ||
        (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE")) {
        this.tipo = 'DOUBLE';
        this.valor = valorIzq - valorDer;
        return parseFloat(this.valor);
        }

        //char e int
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") {
            this.tipo = 'INT';
            this.valor = valorIzq.charCodeAt(0) - valorDer;
            return Number(this.valor);
            }
        else if (this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") {
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer.charCodeAt(0);
                return Number(this.valor);
                }
                //CHAR Y DOUBLE
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") {
                    this.tipo = 'DOUBLE';
                    this.valor = valorIzq.charCodeAt(0) - valorDer;
                    return parseFloat(this.valor);
                    }
        else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") {
                        this.tipo = 'DOUBLE';
                        this.valor = valorIzq - valorDer.charCodeAt(0);
                        return parseFloat(this.valor);
                    }

        else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                sb.append("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                return this.valor;
            }

        }

        else if(this.operador == "/"){

            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return parseFloat(this.valor);
            }
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE") ||
            (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT")) {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq / valorDer;
            return parseFloat(this.valor);
            }
//char e int
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") {
            this.tipo = 'INT';
            this.valor = valorIzq.charCodeAt(0) / valorDer;
            return Number(this.valor);
            }
            else if (this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") {
                this.tipo = 'INT';
                this.valor = valorIzq / valorDer.charCodeAt(0);
                return Number(this.valor);
                }
                //CHAR Y DOUBLE
            else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") {
                    this.tipo = 'DOUBLE';
                    this.valor = valorIzq.charCodeAt(0) / valorDer;
                    return parseFloat(this.valor);
                    }
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") {
                        this.tipo = 'DOUBLE';
                        this.valor = valorIzq / valorDer.charCodeAt(0);
                        return parseFloat(this.valor);
                    }
            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                sb.append("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
                return this.valor;
            }
        }

        else if(this.operador == "%"){
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq % valorDer;
                return parseFloat(this.valor);
            }
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
                this.tipo = 'DOUBLE';
                this.valor = valorIzq % valorDer;
                return parseFloat(this.valor);
            }
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE") ||
            (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT")) {
            this.tipo = 'DOUBLE';
            this.valor = valorIzq % valorDer;
            return parseFloat(this.valor);
            }
            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo de dato");
                sb.append("\n");
                sb.append("Error Semántico: Error de tipo de dato");
                sb.append("\n");
                return this.valor;
            }
        }
        else{
            this.tipo == "ERROR";
            console.log("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
            sb.append("\n");
                sb.append("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
                sb.append("\n");
            return this.valor;
        }

    }

}

module.exports = Aritmetica;