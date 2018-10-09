'use strict'

var numero=parseInt(prompt("introduce un numero",0));

while(isNaN(numero)){
    numero=parseInt(prompt("introduce un numero",0));
}

if(numero%2==0){
    alert("numero par");
}
else{
    alert("numero impar");
}