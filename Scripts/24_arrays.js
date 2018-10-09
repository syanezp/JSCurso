'use strict'

var nombre = ["jose","salvador","yanez","prieto"];
//EN FORMA DE OBJETO
var carros = new Array("VW","Nissan","Toyota","Honda");

console.log(nombre);
console.log(nombre[0]);
console.log(carros[3], carros[0]);

console.log(nombre.length);

for(var i=0;i<=nombre.length-1;i++){
    document.write("<br>"+nombre[i]);
}
document.write("<br>");
document.write("<ul>");
for(var i=0;i<=carros.length-1;i++){
    document.write("<br><li>"+carros[i]);
}
document.write("</ul>");

document.write("======================");
carros.forEach((elemento, index, data)=>{
    document.write("<br>"+elemento);
});

