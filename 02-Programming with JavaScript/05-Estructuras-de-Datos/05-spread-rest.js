/**
 * Operador Spread (...)
 * 
 * Expande arrays, objetos o cadenas en elementos o propiedades individuales.
 * 
 * Se utiliza para:
 * - concatenar arrays
 * - copiar arrays u objetos
 * - pasar elementos como argumentos individuales
 */
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];

const fruitsAndBerries = [...fruits, ...berries]; // concatenar
console.log(fruitsAndBerries); 
// Output: ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

const copyOfFruits = [...fruits]; // copiar
console.log(copyOfFruits);


/**
 * Operador Rest (...)
 * 
 * Reúne múltiples elementos en una sola variable (array u objeto).
 * 
 * Se usa cuando:
 * - desestructuras arrays u objetos
 * - defines funciones con número indefinido de argumentos
 */

// Ejemplo con desestructuración de arrays
const [first, ...restOfFruits] = fruitsAndBerries;
console.log(first); // 'apple'
console.log(restOfFruits); // ['pear', 'plum', 'blueberry', 'strawberry']

// Ejemplo en parámetros de función
function listFruits(first, second, ...others) {
    console.log('First:', first);
    console.log('Second:', second);
    console.log('Others:', others);
}

listFruits('apple', 'pear', 'plum', 'kiwi');
// Output:
// First: apple
// Second: pear
// Others: ['plum', 'kiwi']
