
// Document: 04-eventListener-click.js


// `document` es un objeto global que representa la página web cargada.
// `.querySelector("h1")` es un método que pertenece al objeto `document`.
// Este método recibe un **selector CSS** (en este caso, "h1") y devuelve el primer elemento que coincida.
// Como `document.querySelector("h1")` devuelve un objeto (el nodo HTML <h1>), lo asignamos a la variable `h1`.
var h1 = document.querySelector("h1");
console.log(h1);


// Declaramos una variable `arr` usando `let`, que tiene alcance de bloque (más moderno que `var`).
let arr = [
    'Example Domain', // La ponemos porque sabemos que es lo que dice el h1 de example.com
    'First Click',
    'Second Click',
    'Third Click'
];
console.log(arr);


function handleClicks(){
    // Utilizamos una estructura switch para evaluar el texto actual del <h1>
    // Según el texto que tenga, se lo cambia por el siguiente del array
    switch(h1.innerText){
        case arr[0]: // Si el texto actual es "Example Domain"
            h1.innerText = arr[1]; // Cambiar a "First Click"
            break;
        case arr[1]: // Si ya está en "First Click"
            h1.innerText = arr[2]; // Cambiar a "Second Click"
            break;
        case arr[2]: // Si ya está en "Second Click"
            h1.innerText = arr[3]; // Cambiar a "Third Click"
            break;
        default:
            // Si el texto no coincide con ninguno de los anteriores,
            // lo devolvemos al texto original
            h1.innerText = arr[0];
    }
}


// Aquí usamos la **notación de punto** (`h1.`) para acceder a un método del objeto `h1`.
// En JavaScript, todo elemento HTML del DOM es representado como un **objeto**.


// `addEventListener` es un **método integrado** del estándar DOM.
// Su sintaxis es: `elemento.addEventListener(tipoDeEvento, funcionCallback);`
// - `tipoDeEvento` es un string (por ejemplo, `'click'`, `'change'`, `'input'`).
// - `funcionCallback` es una función que se ejecutará cuando ocurra ese evento.



// En este caso, cuando ocurra un `'click'` sobre el elemento `h1`, se llamará a la función `handleClicks`.
h1.addEventListener('click', handleClicks);
// Asociamos un "escuchador de eventos" (event listener) al elemento <h1>
// Cada vez que se haga clic en el <h1>, se ejecutará la función handleClicks
