'use strict'

var suma =0;
var contador=0;

do{
    var numero = parseInt(prompt("introduce un numero hasta que metas un numero negativo"));
    if(isNaN(numero)){//checa si es un numero
        numero=0        
    }else{
        suma += numero;
        contador++;
    }

    console.log(suma, contador);

}while(numero >=0)
alert("la suma es: "+suma);
alert("la media: " + (suma/contador))