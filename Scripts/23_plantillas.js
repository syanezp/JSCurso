'use strict'

var nombre = prompt("introduce nombre: ");
var apellido = prompt("introduce apellidos: ");

var nombrecompleto = "mi nombre es: " + nombre + " " +apellido;

var htmlcompleto = `
    <h1>MI NOMBRE COMPLETO</h1>
    <h3>${nombre} ${apellido}
`;

document.write(nombrecompleto);
document.write(htmlcompleto);