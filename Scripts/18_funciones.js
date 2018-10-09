'use strict'

function calculadora(){
    console.log("CALCULADORA");
}

function saludo(){
    return "SALUDOS numero UNO";
}

function variasoperaciones(num1, num2, mostrar=false){
    if(mostrar==false){
        console.log("*************************");
        console.log("suma "+ (num1 + num2));
        console.log("resta "+ (num1 - num2));
        console.log("multiplicacion "+ (num1*num2));
        console.log("division "+ (num1/num2));
    }else{
        document.write("*************************<br>");
        document.write("suma "+ (num1 + num2)+"<br>");
        document.write("resta "+ (num1 - num2)+"<br>");
        document.write("multiplicacion "+ (num1*num2)+"<br>");
        document.write("division "+ (num1/num2)+"<br>");
    }

}


//calculadora();
//console.log(saludo());

for(var u=1;u<=10;u++){
    variasoperaciones(u,u, false);
}