

let nombre = "Hola Mundo";

console.log(nombre);

let apellido;
apellido="Calderon";


//---------------------------------------------------


let petDog = "Rex";
let petCat = "Pepper";
console.log(petDog);
console.log(petCat);



console.log("My pet dog's name is:", petDog);
console.log("My pet cat's name is:", petCat);

// También se pueden usar template literals:
console.log(`My pet dog's name is: ${petDog}`);
console.log(`My pet dog's name is: ${petCat}`);

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 


//---------------------------------------------------


let catSound = "purr";
let dogSound = "woof";

console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound= "meow";
console.log(petCat, "now says", catSound);


// ¿CUÁNDO USAR LET, CONST Y VAR?
/**
 * En versiones anteriores de JS solo se usaba el var.
 * Ahora, lo que se recomienda es usarlas así:
 * 
 * LET   -> Si el valor puede cambiar en el código
 * CONST -> Si el valor se va a mantener constante durante todo el programa
 * 
 * VAR ya no se recomienda usarlo
 */