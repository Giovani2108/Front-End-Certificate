
// Recomendado para iterar sobre objetos

let user = {
    id: 1,
    name:'Chanchito Feliz',
    age: 25, 
};

for (let propiedad in user){
    console.log(propiedad, user[propiedad]);
}



// Otra forma de iterar sobre objetos:
// Object.keys(), Object.values(), y Object.entries()
//---------------------------------------------------------------

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]