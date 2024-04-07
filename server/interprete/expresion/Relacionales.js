const { Expresion, TipoDato } = require("../Expresion");

class Relacionales extends Expresion{
    constructor(expIzq, operador, expDer, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;

    }

    interpretar(entorno,tablaDeSimbolos){
        let valorIzq = this.expIzq.interpretar(entorno,tablaDeSimbolos);
        let valorDer = this.expDer.interpretar(entorno,tablaDeSimbolos);



        if(this.operador == "=="){
            //INT - INT
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'BOOL';
                this.valor = valorIzq == valorDer;
                //console.log(this.valor);
                return this.valor;
            }
            //DOUBLE -INT
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
                (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
                this.tipo = 'BOOL';
                this.valor = valorIzq == valorDer;
                //console.log(this.valor);
                return this.valor;
            } //INT - CHAR
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") ) {
                this.tipo = 'BOOL';
                this.valor = valorIzq == valorDer.charCodeAt(0);
                //console.log(this.valor);
                return this.valor;
            }
            else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") ) {
                this.tipo = 'BOOL';
                this.valor = valorIzq.charCodeAt(0) == valorDer;
                //console.log(this.valor);
                return this.valor;
            }//DOUBLE - CHAR
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq == valorDer.charCodeAt(0);
            return this.valor;
        } else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq.charCodeAt(0) == valorDer;
            return this.valor;
        }
        //CHAR - CHAR
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
            this.tipo = 'BOOL';
            this.valor = valorIzq == valorDer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
            this.tipo = 'BOOL';
            this.valor = valorIzq == valorDer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "BOOL") {
            this.tipo = 'BOOL';
            this.valor = valorIzq == valorDer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "STD::STRING") {
            this.tipo = 'BOOL';
            this.valor = valorIzq == valorDer;
            return this.valor;
        }
        else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT") ||
        (this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL")) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0;
        let der = valorDer+0;
        this.valor = izq == der;
        //console.log(this.valor);
        return this.valor;
    }
    
    else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE") ||
        (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL")) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0.0;
        let der = valorDer+0.0;
        this.valor = izq == der;
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "CHAR") ) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0;
        this.valor = izq == valorDer.charCodeAt(0);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "BOOL") ) {
        this.tipo = 'BOOL';
        let der = valorDer+0;
        this.valor = valorIzq.charCodeAt(0) == der;
        return this.valor;
    }

        else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error en OP relacional, se intantan operar tipos de dato no permitidos");
                return this.valor;
        }
        }

        if(this.operador == "!="){
            //INT - INT
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'BOOL';
                this.valor = valorIzq != valorDer;
                //console.log(this.valor);
                return this.valor;
            }
            //DOUBLE -INT
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
                (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
                this.tipo = 'BOOL';
                this.valor = valorIzq != valorDer;
                //console.log(this.valor);
                return this.valor;
            } //INT - CHAR
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") ) {
                this.tipo = 'BOOL';
                this.valor = valorIzq != valorDer.charCodeAt(0);
                //console.log(this.valor);
                return this.valor;
            }
            else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") ) {
                this.tipo = 'BOOL';
                this.valor = valorIzq.charCodeAt(0) != valorDer;
                //console.log(this.valor);
                return this.valor;
            }//DOUBLE - CHAR
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq != valorDer.charCodeAt(0);
            return this.valor;
        } else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq.charCodeAt(0) != valorDer;
            return this.valor;
        }
        //CHAR - CHAR
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
            this.tipo = 'BOOL';
            this.valor = valorIzq != valorDer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") {
            this.tipo = 'BOOL';
            this.valor = valorIzq != valorDer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "BOOL") {
            this.tipo = 'BOOL';
            this.valor = valorIzq != valorDer;
            return this.valor;
        }
        else if (this.expIzq.tipo == "STD::STRING" && this.expDer.tipo == "STD::STRING") {
            this.tipo = 'BOOL';
            this.valor = valorIzq != valorDer;
            return this.valor;
        }
        else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT") ||
        (this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL")) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0;
        let der = valorDer+0;
        this.valor = izq != der;
        //console.log(this.valor);
        return this.valor;
    }
    
    else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE") ||
        (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL")) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0.0;
        let der = valorDer+0.0;
        this.valor = izq != der;
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "CHAR") ) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0;
        this.valor = izq != valorDer.charCodeAt(0);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "BOOL") ) {
        this.tipo = 'BOOL';
        let der = valorDer+0;
        this.valor = valorIzq.charCodeAt(0) != der;
        return this.valor;
    }

        else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error en OP relacional, se intantan operar tipos de dato no permitidos");
                return this.valor;
        }
        }
//---------------------------------------<---------------------
        else if(this.operador == "<"){
            //INT - INT
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'BOOL';
                this.valor = valorIzq < valorDer;
                //console.log(this.valor);
                return this.valor;
            }
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq < valorDer;
            //console.log(this.valor);
            return this.valor;
            }
            //DOUBLE -INT
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
                (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
                this.tipo = 'BOOL';
                this.valor = valorIzq < valorDer;
                //console.log(this.valor);
                return this.valor;
            } //INT - CHAR
            else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") ) {
                this.tipo = 'BOOL';
                this.valor = valorIzq < valorDer.charCodeAt(0);
                //console.log(this.valor);
                return this.valor;
            }
            else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") ) {
                this.tipo = 'BOOL';
                this.valor = valorIzq.charCodeAt(0) < valorDer;
                //console.log(this.valor);
                return this.valor;
            }//DOUBLE - CHAR
            else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq < valorDer.charCodeAt(0);
            return this.valor;
        } else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") ) {
            this.tipo = 'BOOL';
            this.valor = valorIzq.charCodeAt(0) < valorDer;
            return this.valor;
        }
        //CHAR - CHAR
        else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
            this.tipo = 'BOOL';
            this.valor = valorIzq.charCodeAt(0) < valorDer.charCodeAt(0);
            return this.valor;
        }
        else if (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "BOOL") {
            this.tipo = 'BOOL';
            let izq = valorIzq+0;
            let der = valorDer+0;
            this.valor = izq < der;
            return this.valor;
        }
        else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT") ||
        (this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL")) {
        this.tipo = 'BOOL';
        let izq = valorIzq+0;
        let der = valorDer+0;
        this.valor = izq < der;
        //console.log(this.valor);
        return this.valor;
        }
        
        else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE") ||
            (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL")) {
            this.tipo = 'BOOL';
            let izq = valorIzq+0.0;
            let der = valorDer+0.0;
            this.valor = izq < der;
            //console.log(this.valor);
            return this.valor;
        }
        else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "CHAR") ) {
            this.tipo = 'BOOL';
            let izq = valorIzq+0;
            this.valor = izq < valorDer.charCodeAt(0);
            return this.valor;
        }
        else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "BOOL") ) {
            this.tipo = 'BOOL';
            let der = valorDer+0;
            this.valor = valorIzq.charCodeAt(0) < der;
            return this.valor;
        }
        
        else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error en OP relacional, se intantan operar tipos de dato no permitidos");
                return this.valor;
        }
        }
//----------------------<=
else if(this.operador == "<="){
    //INT - INT
    if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
        this.tipo = 'BOOL';
        this.valor = valorIzq <= valorDer;
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq <= valorDer;
    //console.log(this.valor);
    return this.valor;
    }
    //DOUBLE -INT
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
        (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
        this.tipo = 'BOOL';
        this.valor = valorIzq <= valorDer;
        //console.log(this.valor);
        return this.valor;
    } //INT - CHAR
    else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") ) {
        this.tipo = 'BOOL';
        this.valor = valorIzq <= valorDer.charCodeAt(0);
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") ) {
        this.tipo = 'BOOL';
        this.valor = valorIzq.charCodeAt(0) <= valorDer;
        //console.log(this.valor);
        return this.valor;
    }//DOUBLE - CHAR
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq <= valorDer.charCodeAt(0);
    return this.valor;
} else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq.charCodeAt(0) <= valorDer;
    return this.valor;
}
//CHAR - CHAR
else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
    this.tipo = 'BOOL';
    this.valor = valorIzq.charCodeAt(0) <= valorDer.charCodeAt(0);
    return this.valor;
}
else if (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "BOOL") {
    this.tipo = 'BOOL';
    let izq = valorIzq+0;
    let der = valorDer+0;
    this.valor = izq <= der;
    return this.valor;
}
else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT") ||
(this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL")) {
this.tipo = 'BOOL';
let izq = valorIzq+0;
let der = valorDer+0;
this.valor = izq <= der;
//console.log(this.valor);
return this.valor;
}

else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE") ||
    (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL")) {
    this.tipo = 'BOOL';
    let izq = valorIzq+0.0;
    let der = valorDer+0.0;
    this.valor = izq <= der;
    //console.log(this.valor);
    return this.valor;
}
else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "CHAR") ) {
    this.tipo = 'BOOL';
    let izq = valorIzq+0;
    this.valor = izq <= valorDer.charCodeAt(0);
    return this.valor;
}
else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "BOOL") ) {
    this.tipo = 'BOOL';
    let der = valorDer+0;
    this.valor = valorIzq.charCodeAt(0) <= der;
    return this.valor;
}

else{
        this.tipo == "ERROR";
        console.log("Error Semántico: Error en OP relacional, se intantan operar tipos de dato no permitidos");
        return this.valor;
}
}
//----------------->

else if(this.operador == ">"){
    //INT - INT
    if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
        this.tipo = 'BOOL';
        this.valor = valorIzq > valorDer;
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq > valorDer;
    //console.log(this.valor);
    return this.valor;
    }
    //DOUBLE -INT
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
        (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
        this.tipo = 'BOOL';
        this.valor = valorIzq > valorDer;
        //console.log(this.valor);
        return this.valor;
    } //INT - CHAR
    else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") ) {
        this.tipo = 'BOOL';
        this.valor = valorIzq > valorDer.charCodeAt(0);
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") ) {
        this.tipo = 'BOOL';
        this.valor = valorIzq.charCodeAt(0) > valorDer;
        //console.log(this.valor);
        return this.valor;
    }//DOUBLE - CHAR
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq > valorDer.charCodeAt(0);
    return this.valor;
} else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq.charCodeAt(0) > valorDer;
    return this.valor;
}
//CHAR - CHAR
else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
    this.tipo = 'BOOL';
    this.valor = valorIzq.charCodeAt(0) > valorDer.charCodeAt(0);
    return this.valor;
}
else if (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "BOOL") {
    this.tipo = 'BOOL';
    let izq = valorIzq+0;
    let der = valorDer+0;
    this.valor = izq > der;
    return this.valor;
}
else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT") ||
(this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL")) {
this.tipo = 'BOOL';
let izq = valorIzq+0;
let der = valorDer+0;
this.valor = izq > der;
//console.log(this.valor);
return this.valor;
}

else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE") ||
    (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL")) {
    this.tipo = 'BOOL';
    let izq = valorIzq+0.0;
    let der = valorDer+0.0;
    this.valor = izq > der;
    //console.log(this.valor);
    return this.valor;
}
else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "CHAR") ) {
    this.tipo = 'BOOL';
    let izq = valorIzq+0;
    this.valor = izq > valorDer.charCodeAt(0);
    return this.valor;
}
else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "BOOL") ) {
    this.tipo = 'BOOL';
    let der = valorDer+0;
    this.valor = valorIzq.charCodeAt(0) > der;
    return this.valor;
}

else{
        this.tipo == "ERROR";
        console.log("Error Semántico: Error en OP relacional, se intantan operar tipos de dato no permitidos");
        return this.valor;
}
}

//---------------------------------->=

else if(this.operador == ">="){
    //INT - INT
    if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
        this.tipo = 'BOOL';
        this.valor = valorIzq >= valorDer;
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq >= valorDer;
    //console.log(this.valor);
    return this.valor;
    }
    //DOUBLE -INT
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT") ||
        (this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE")) {
        this.tipo = 'BOOL';
        this.valor = valorIzq >= valorDer;
        //console.log(this.valor);
        return this.valor;
    } //INT - CHAR
    else if ((this.expIzq.tipo == "INT" && this.expDer.tipo == "CHAR") ) {
        this.tipo = 'BOOL';
        this.valor = valorIzq >= valorDer.charCodeAt(0);
        //console.log(this.valor);
        return this.valor;
    }
    else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "INT") ) {
        this.tipo = 'BOOL';
        this.valor = valorIzq.charCodeAt(0) >= valorDer;
        //console.log(this.valor);
        return this.valor;
    }//DOUBLE - CHAR
    else if ((this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CHAR") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq >= valorDer.charCodeAt(0);
    return this.valor;
} else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "DOUBLE") ) {
    this.tipo = 'BOOL';
    this.valor = valorIzq.charCodeAt(0) >= valorDer;
    return this.valor;
}
//CHAR - CHAR
else if (this.expIzq.tipo == "CHAR" && this.expDer.tipo == "CHAR") {
    this.tipo = 'BOOL';
    this.valor = valorIzq.charCodeAt(0) >= valorDer.charCodeAt(0);
    return this.valor;
}
else if (this.expIzq.tipo == "BOOL" && this.expDer.tipo == "BOOL") {
    this.tipo = 'BOOL';
    let izq = valorIzq+0;
    let der = valorDer+0;
    this.valor = izq >= der;
    return this.valor;
}
else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "INT") ||
(this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOL")) {
this.tipo = 'BOOL';
let izq = valorIzq+0;
let der = valorDer+0;
this.valor = izq >= der;
//console.log(this.valor);
return this.valor;
}

else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "DOUBLE") ||
    (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOL")) {
    this.tipo = 'BOOL';
    let izq = valorIzq+0.0;
    let der = valorDer+0.0;
    this.valor = izq >= der;
    //console.log(this.valor);
    return this.valor;
}
else if ((this.expIzq.tipo == "BOOL" && this.expDer.tipo == "CHAR") ) {
    this.tipo = 'BOOL';
    let izq = valorIzq+0;
    this.valor = izq >= valorDer.charCodeAt(0);
    return this.valor;
}
else if ((this.expIzq.tipo == "CHAR" && this.expDer.tipo == "BOOL") ) {
    this.tipo = 'BOOL';
    let der = valorDer+0;
    this.valor = valorIzq.charCodeAt(0) >= der;
    return this.valor;
}

else{
        this.tipo == "ERROR";
        console.log("Error Semántico: Error en OP relacional, se intantan operar tipos de dato no permitidos");
        return this.valor;
}
}

        else{
            this.tipo == "ERROR";
            console.log("Error Semántico: Error de tipo SIGNO ARITMETICO y DATOS A OPERAR");
            return this.valor;
        }

    }

}

module.exports = Relacionales;