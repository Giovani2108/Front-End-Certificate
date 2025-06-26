var greet = "Hello, ";
var place = "World";


//.length MIDE LONGITUD
greet.length; // 7

//.charAt LEE UN CARACTER ESPECIFICO
greet.charAt(0); // 'H'

//.concat UNE DOS CADENAS
"Wo".concat("rl").concat("d"); // 'World'

//.indexof DEVUELVE LA POSICION DE LA PRIMER COINCIDENCIA
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

//.lastIndexOf DEVUELVE LA POSICION DE LA ULTIMA COINCIDENCIA
"ho-ho-ho".lastIndexOf('h'); // 6
"ho-ho-ho".lastIndexOf('o'); // 7
"ho-ho-ho".lastIndexOf('-'); // 5

// .split DIVIDE LA CADENA EN UN ARRAY
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

//Convertir a mayúsculas, o minúsculas
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "