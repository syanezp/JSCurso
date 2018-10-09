'use script'

    var numero1 = parseInt(prompt("Introduce el primer numero: ",0));
    var numero2 = parseInt(prompt("introduce el segundo numero: ",0));

    while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
        alert("numeros incorrectos, vuelve a introducirlos");
        numero1 = parseInt(prompt("Introduce el primer numero: ",0));
        numero2 = parseInt(prompt("introduce el segundo numero: ",0));
    }

    //si los numero no son numeros o 0 que vuelva a pedir los numeros
    if(numero1 > numero2 ){
        alert("El numero " + numero1+ " es mayor a "+ numero2);
    } else if(numero2 > numero1){
        alert("El numero " + numero2+ " es mayor a "+ numero1);
    } else{
        alert("Son iguales");
    }
