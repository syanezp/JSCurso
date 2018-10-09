'use strict'

var numero='39';
var nombre='jose salvador';
var apellidos='yanez prieto';

var dato = numero.toString();
dato = nombre.toUpperCase() + ' '+ apellidos.toUpperCase();

var dato2 = nombre.concat(' '+ apellidos);

console.log(typeof dato);
console.log(dato);
console.log(dato2);

//calcular longitud

console.log(dato.length);

//BUSCAR UN STRING
var busqueda = dato.indexOf("DOR");
busqueda = dato2.lastIndexOf("dor");
busqueda = dato2.search("dor");
busqueda = dato.match("sal");
console.log(busqueda);


console.log(dato.substr(10,10));
console.log(dato.charAt(10));
console.log(dato.startsWith("JO"));

console.log(dato.includes("SALV"));

console.log(nombre.replace("va","b4"));
console.log(nombre.slice(5));
console.log(nombre.split());
console.log(nombre.split(" "));
console.log(nombre.trim());