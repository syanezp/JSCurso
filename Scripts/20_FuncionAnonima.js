'use strict'

var pelicula = function(nombre){
    return 'la pelicula es: '+ nombre;
}

function sumados(num1, num2, sumaYMuestra, sumaPorDos){
    var sumar = num1+num2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumados(2,5, function(dato){
    console.log("la suma es: "+ dato);
},
function(dato){
    console.log("la suma por dos es: "+ (dato*2));
});

//FUNCION DE FLECHA
sumados(2,5, (dato)=>{
    console.log("la suma es: "+ dato);
},
(dato)=>{
    console.log("la suma por dos es: "+ (dato*2));
});