
// ✅ JSON: JavaScript Object Notation
// Es un formato de texto ligero para almacenar e intercambiar datos.
// Aunque se parece mucho a un objeto de JavaScript, **no es exactamente lo mismo**.

// Ejemplo de texto JSON (lo podríamos recibir desde una API o archivo):
let jsonText = '{"nombre":"Ada","edad":30,"lenguajes":["JavaScript","Python"]}';

// Este texto es un string, no podemos acceder a sus propiedades directamente.
// console.log(jsonText.nombre);  ❌ Esto daría undefined


// 🔄 JSON.parse()
// Convierte un string JSON válido a un **objeto JavaScript real**
let persona = JSON.parse(jsonText);
console.log(persona);          // ✅ Ahora sí es un objeto JS
console.log(persona.nombre);   // "Ada"
console.log(persona.lenguajes[1]); // "Python"


// 🔄 JSON.stringify()
// Hace lo contrario: convierte un **objeto JavaScript** en un **string JSON**
let objetoOriginal = {
    producto: "Libro",
    precio: 12.99,
    disponible: true
};

let textoConvertido = JSON.stringify(objetoOriginal);
console.log(textoConvertido); // '{"producto":"Libro","precio":12.99,"disponible":true}'


// Esto es muy útil para:
// - Enviar datos por red (APIs).
// - Guardar datos en localStorage.
// - Escribir archivos en Node.js.


// 🧪 Comprobación de equivalencia:
let backToObject = JSON.parse(textoConvertido);
console.log(backToObject.producto); // "Libro"


// ❌ ¡Atención! JSON.stringify ignora funciones y propiedades no válidas
let objetoConFuncion = {
    saludo: "hola",
    decirHola: function () { console.log("hola"); }
};

console.log(JSON.stringify(objetoConFuncion)); 
// Solo guarda: {"saludo":"hola"} — las funciones no existen en JSON


// ❌ Métodos incorrectos: JSON.fromString y JSON.toString
// NO existen los métodos `JSON.fromString` ni `JSON.toString`
// Si los ves, es un error o una confusión con otros lenguajes como Python.

// Lo correcto en JavaScript ES:
// - JSON.parse()    ← convierte texto → objeto
// - JSON.stringify() ← convierte objeto → texto


// ✅ Recuerda:
// JSON      = formato de texto (parecido a objetos, pero más limitado)
// Objeto JS = estructura con más poder (métodos, lógica, etc.)

// Por eso usamos estos métodos cuando pasamos entre ellos:
// String JSON   ⇄   Objeto JavaScript
//       ↑             ↑
//  JSON.parse()   JSON.stringify()
