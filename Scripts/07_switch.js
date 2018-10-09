'use strict'

var edad = 39;
var imprime = "";

switch(edad){
    case 18:
        imprime="mayor de edad";
        break;
    case 25:
        imprime = "adulto";
        break;
    case 39:
        imprime = "edad correcta";
        break;
    default:
        imprime = "no registrado";
        break;
}

console.log(imprime);

