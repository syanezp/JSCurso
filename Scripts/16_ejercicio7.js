'use strict'

var numero = parseInt(prompt("De que numero quieres la tabla",0));

for(var i=1; i<=10; i++){
    document.write(numero + " x " + i +" = "+ (i*numero) + "<br>");
}

for(var a=1; a<=10; a++){
    document.write("TABLA DEL "+ a + "<br>");
    for(var b=1;b<=10;b++){
        document.write(a + " x " + b +" = "+ (a*b) + "<br>");
    }    
}