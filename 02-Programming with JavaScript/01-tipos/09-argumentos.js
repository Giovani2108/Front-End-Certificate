//Cuando referenciamos valores dentro de la funcion se llaman...
function suma(a, b){ //Parámetros
    console.log(arguments); //Referenciar todos los valores que recibe la funcion
    return a + b;
}
//Los valores que le pasamos a las funciones cuando se llaman...
let resultado = suma(5, 6, 7, 8, 9); //Argumentos
console.log(resultado);



console.log(typeof suma); // Una funcion es de tipo function


