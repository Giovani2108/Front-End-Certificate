// Document: 01-instalar-jest.js

// ✅ ¿Qué es Jest?
// Jest es un framework de testing para JavaScript.
// Permite escribir pruebas automatizadas para tu código, con resultados en rojo (fallos) o verde (correcto).

// 🔧 PASO 1: Crear un proyecto de Node.js
// En tu terminal, ejecuta:
// > npm init -y
// Esto genera un archivo package.json con la configuración por defecto.


// 🔧 PASO 2: Instalar Jest
// Ejecuta este comando:
// > npm install --save-dev jest

// El flag `--save-dev` indica que Jest es solo para desarrollo, no para producción.


// 🔧 PASO 3: Configurar Jest en package.json
// Dentro de package.json, agrega este script:

/*
  "scripts": {
    "test": "jest"
  }
*/

// Ahora puedes correr tus pruebas con:
// > npm test


// ✅ PASO 4: Crear un archivo con código a probar
// Crea un archivo llamado `suma.js` con esta función simple:

// --- suma.js ---
function suma(a, b) {
  return a + b;
}

module.exports = suma; // Exportamos la función para poder probarla
// ----------------


// ✅ PASO 5: Crear un archivo de prueba
// Crea un archivo llamado `suma.test.js` con lo siguiente:

// --- suma.test.js ---
const suma = require('./suma');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5); // ✅ se espera que 2 + 3 sea 5
});

test('suma 2 + 2 NO debe ser 5', () => {
  expect(suma(2, 2)).not.toBe(5); // ❌ si esto fallara, se vería en rojo
});
// --------------------


// ✅ PASO 6: Ejecutar las pruebas
// En tu terminal, corre:
// > npm test

// Verás una salida indicando qué pruebas pasaron (verde) y cuáles fallaron (rojo).


// 🧠 Conceptos clave:
// - `test(nombre, callback)` define una prueba
// - `expect(valor).toBe(valorEsperado)` compara el resultado
// - `.not.toBe()` niega la comparación

// 🟢 Verde = Todo bien
// 🔴 Rojo = Alguna prueba falló

// Puedes probar cambiar un número para ver cómo Jest marca errores.

