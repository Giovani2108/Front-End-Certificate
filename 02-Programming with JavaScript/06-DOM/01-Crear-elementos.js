// ================================
// Document Object Model (DOM)
// ================================

// Introducción:
// En este archivo aprendemos cómo crear un elemento HTML desde JavaScript 
// utilizando el método document.createElement, cómo establecer su contenido y atributos,
// y cómo agregarlo al documento HTML utilizando appendChild.

// Paso 1: Crear un elemento <h2>
const h2 = document.createElement("h2");

// Paso 2: Establecer el contenido del elemento
h2.innerText = "Este es un título h2";

// Paso 3: Asignar atributos al elemento
h2.setAttribute("id", "subheading");
h2.setAttribute("class", "secondary");

// Paso 4: (opcional) Ver el resultado en consola
console.log(h2); 

/* 
  Resultado en la consola:
  <h2 id="subheading" class="secondary">Este es un título h2</h2>
*/

// Paso 5: Agregar el elemento al <body> del documento
document.body.appendChild(h2);