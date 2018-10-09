'use strict'

function ListadoFrutas(fruta1, fruta2, ...resto){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto)
}

ListadoFrutas("Naranja","Manzana","Pera","Melon");

var frutas = ["Ciruela", "Durazno"]
ListadoFrutas(...frutas,"Naranja","Manzana","Pera","Melon");