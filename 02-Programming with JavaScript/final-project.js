// Este es el projecto final del curso Programming with JavaScript

//   Funciones:
// - `getPrices`: muestra los precios de los platos, con o sin impuestos.
// - `getDiscount`: muestra los precios (llamando a `getPrices`) y calcula un descuento basado en el número de comensales.


// ========================
// Datos base
// ========================

// Declaramos una constante `dishData` que contiene un **array de objetos**.
// Cada objeto representa un plato con dos propiedades:
// - `name`: el nombre del plato (string)
// - `price`: el precio base sin impuestos (número)
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Declaramos una constante `tax` que representa un valor de multiplicación para aplicar impuestos.
// Si el impuesto fuera del 20%, multiplicamos el precio por 1.20.
const tax = 1.20;


// ========================
// Función getPrices
// ========================

// Esta función recibe un parámetro `taxBoolean`.
// - Si es `true`, calcula y muestra los precios CON impuestos.
// - Si es `false`, muestra los precios SIN impuestos.
// - Si no se pasa un booleano, lanza un mensaje de error.
function getPrices(taxBoolean) {
    // Usamos un bucle `for` para recorrer todos los elementos del array `dishData`.
    for (let dish = 0; dish < dishData.length; dish++) {

        // Declaramos una variable `finalPrice` para almacenar el precio con o sin impuestos.
        let finalPrice;

        // Si `taxBoolean` es verdadero, aplicamos el impuesto.
        if (taxBoolean === true) {
            finalPrice = dishData[dish].price * tax;
        }
        // Si `taxBoolean` es falso, usamos el precio original.
        else if (taxBoolean === false) {
            finalPrice = dishData[dish].price;
        }
        // Si `taxBoolean` no es un valor booleano, mostramos un mensaje de error y salimos de la función.
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        // Mostramos en consola el nombre del plato y su precio final (con o sin impuestos).
        console.log(`Dish: ${dishData[dish].name} Price: $${finalPrice.toFixed(2)}`);
    }
}


// ========================
// Función getDiscount
// ========================

// Esta función recibe dos argumentos:
// - `taxBoolean`: que se pasa directamente a `getPrices`.
// - `guests`: el número de comensales (clientes).
//
// Primero muestra los precios usando `getPrices`.
// Luego, según la cantidad de `guests`, aplica un descuento:
// - Si hay menos de 5 comensales, aplica un descuento de $5.
// - Si hay 5 o más (hasta 29), aplica un descuento de $10.
// - Si el valor de `guests` no es válido, muestra un mensaje de error.
function getDiscount(taxBoolean, guests) {
    // Llamamos a `getPrices`, que imprimirá la lista de platos con o sin impuestos.
    getPrices(taxBoolean);

    // Verificamos que `guests` sea un número válido entre 1 y 29.
    if (typeof guests === "number" && guests > 0 && guests < 30) {
        
        // Declaramos una variable `discount` que almacenará el valor del descuento.
        let discount = 0;

        // Aplicamos las reglas del descuento según la cantidad de invitados.
        if (guests < 5) {
            discount = 5;
        } else {
            discount = 10;
        }

        // Mostramos en consola el descuento final.
        console.log(`Discount is: $${discount}`);
    }
    // Si el valor de `guests` no es válido, mostramos un mensaje de advertencia.
    else {
        console.log("The second argument must be a number between 0 and 30");
    }
}


// ========================
// Llamadas a la función
// ========================

// Llamamos a `getDiscount` con impuestos (`true`) y 2 comensales.
getDiscount(true, 2);

// Llamamos a `getDiscount` sin impuestos (`false`) y 10 comensales.
getDiscount(false, 10);