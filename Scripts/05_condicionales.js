'use strict'

//condicional IF

var NumeroIf1 = 30;
var NumeroIf2 = 30;
if(NumeroIf1 > NumeroIf2){
	console.log("Numero1 es mayor a Numero2");	
} else if (NumeroIf2 > NumeroIf1){
	console.log("Numero2 es mayor a Numero1");
} else {
	console.log("son iguales");
}

//OPERADORES LOGICOS
/*
AND - &&
OR  - ||
NOT - !
*/

var anio = 2018;
if(anio != 2016){
	console.log("anio incorrecto", anio);
}

if(anio >=2018 && anio <=2020){
	console.log("actual");
}

if(anio > 2018 || anio == 2018){
	console.log("anio correcto");
}

