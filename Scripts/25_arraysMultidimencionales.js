'use strict'

var peliculas = ['una','dos','tres','cuatro']
var musica = ['cinco','seis','siete','ocho']

var todo =[peliculas,musica]

console.log(todo)

console.log(todo[1][1])
//agrega un elemento al arreglo
peliculas.push("cauatro.uno")
console.log(peliculas)
//saca un elemento del arreglo
peliculas.pop("cuatro.uno")
console.log(peliculas)

var pelis = peliculas.join()
console.log(pelis)