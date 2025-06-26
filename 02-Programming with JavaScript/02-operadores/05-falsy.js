// short-circuit


//..................................
// Falssy
//..................................
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);


function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}


//Operador lógico en funciones
let x = fn1() && fn2(); // Solo ejecuta fn2 cuando fn1 devuelve true

console.log(x);
