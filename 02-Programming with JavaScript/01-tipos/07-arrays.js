// Arrays / Coleccion / Arreglo
//  ORDENADO!

let animales = ['chanchito', 'caballo']; //Array Literal
console.log(animales);


//Respeta el orden, como una lista

//Hacer referencia a posiciones del array
console.log(animales[0]);

//Agregar elementos al array en alguna posicion especial
animales[2]= 'dragón';
console.log(animales);


// Si aumentamos la posicion, llenará con espacios, para hacer posible el indicado
animales[10]= 'Pez';
console.log(animales[7]);


console.log(typeof animales); //Los arreglos se comportan como objetos


console.log(animales.length); // Devolver longitud del arreglo




//PUSH - Añadir nuevos elementos
//POP  - Eliminar último elemento del Array
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']


fruits.pop();
console.log(fruits); // ['apple']