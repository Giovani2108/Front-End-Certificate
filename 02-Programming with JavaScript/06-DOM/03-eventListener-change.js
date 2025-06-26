// Document: 03-eventListener-change.js

// Este script está diseñado para ejecutarse directamente en la consola del navegador
// sobre cualquier página web (por ejemplo, example.com).


// Creamos un elemento HTML <h1> de forma dinámica con `document.createElement()`.
// No está en el HTML original de la página, lo generamos desde JavaScript.
var h1 = document.createElement('h1');

// Usamos la propiedad `.innerText` para establecer el texto que se mostrará en el <h1>.
h1.innerText = "Escribe algo en el input y presiona ENTER";


// Ahora creamos un campo de entrada de texto con `document.createElement('input')`.
var input = document.createElement('input');

// Con `setAttribute()` le indicamos que el tipo de input será texto.
input.setAttribute('type', 'text');


// Limpiamos todo el contenido actual de la página reemplazando `document.body.innerText` con una cadena vacía.
document.body.innerText = ''; // Borra todo el texto visible en el body

// Añadimos el <h1> y el <input> al body, para que se vean en la página.
document.body.appendChild(h1);
document.body.appendChild(input);


// A partir de aquí trabajamos con eventos.
// Usamos `addEventListener` para "escuchar" cuando ocurra un cambio en el campo de texto.

// El evento `'change'` se dispara cuando el usuario cambia el contenido del input
// y luego quita el foco (por ejemplo, presionando ENTER o haciendo clic fuera del input).
input.addEventListener('change', function () {
    // Cuando ocurre el evento, actualizamos el texto del <h1>
    // con el contenido que el usuario escribió en el input.
    h1.innerText = input.value;
});

// De esta manera, al escribir algo en el input y presionar ENTER,
// el contenido del <h1> se actualizará dinámicamente.




// 🧠 Diferencia entre 'input' y 'change':
// - 'input' se dispara en cada pulsación de tecla (en tiempo real).
// - 'change' solo se dispara cuando el usuario termina de escribir y confirma el cambio.

// 📌 Este tipo de eventos es muy útil para formularios, configuraciones y dinámicas en tiempo real.
