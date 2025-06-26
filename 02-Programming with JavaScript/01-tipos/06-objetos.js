// DESORDENADO!

// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;


let personaje = {}; //Objeto Literal
personaje = {
    nombre: "Tanjiro", //par llave-valor
    anime: "Demon Slayer",
    edad: 16,
}
/**
 * En JavaScript se llaman propiedades, no atributos.
 */



//Cómo referirse a una propiedad del objeto:
console.log(personaje.nombre);
console.log(personaje['nombre']); //Todas las claves son cadenas

//Incluso para actualizarla
personaje.edad = 13;
personaje['edad'] = 16;

let llave = 'edad';
personaje[llave]=16;


//Borrar propiedades de un objeto
delete personaje.anime;
console.log(personaje)