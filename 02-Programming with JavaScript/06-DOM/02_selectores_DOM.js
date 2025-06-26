// ================================
// Document Object Model (DOM)
// ================================

// Introducción:
// En este archivo exploramos los métodos más comunes para seleccionar elementos 
// del DOM en JavaScript. Estos métodos permiten acceder a nodos existentes 
// para luego manipular su contenido, atributos o estilos.

// Suponiendo que el HTML tiene la siguiente estructura:
/*
  <h1 id="titulo">Título principal</h1>
  <p class="descripcion">Primer párrafo</p>
  <p class="descripcion">Segundo párrafo</p>
  <div class="contenedor">
    <span>Elemento dentro del contenedor</span>
  </div>
*/

// 1. Seleccionar un elemento por ID
const titulo = document.getElementById("titulo");
console.log(titulo);
/*
  Resultado:
  <h1 id="titulo">Título principal</h1>
*/

// 2. Seleccionar todos los elementos con una clase
const parrafos = document.getElementsByClassName("descripcion");
console.log(parrafos);
/*
  Resultado:
  HTMLCollection(2) [
    <p class="descripcion">Primer párrafo</p>,
    <p class="descripcion">Segundo párrafo</p>
  ]
*/

// 3. Seleccionar un único elemento usando cualquier selector CSS
// Selecciona el primer elemento que coincida con el selector CSS dado
const contenedor = document.querySelector(".contenedor");
console.log(contenedor);
/*
  Resultado:
  <div class="contenedor">
    <span>Elemento dentro del contenedor</span>
  </div>
*/

// 4. Selecciona todos los elementos que coincidan con el selector CSS
// Devuelve un NodeList, que es como un array pero mejor poque puedes usar .forEach()
const todosLosParrafos = document.querySelectorAll("p");
console.log(todosLosParrafos);
/*
  Resultado:
  NodeList(2) [
    <p class="descripcion">Primer párrafo</p>,
    <p class="descripcion">Segundo párrafo</p>
  ]
*/

// Notas:
// - getElementById retorna un solo elemento (o null si no existe).
// - getElementsByClassName retorna una colección HTML (HTMLCollection).
// - querySelector retorna el primer elemento que coincide con el selector.
// - querySelectorAll retorna todos los elementos coincidentes en un NodeList (más moderno y versátil que HTMLCollection).