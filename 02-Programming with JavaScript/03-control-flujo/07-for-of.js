
// Recomendado para iterar sobre arreglos
let animales = ['Chanchito Feliz', 'Dragón', "Perrito"]


for(let animal of animales){  // Todo en 1 sola linea
    console.log(animal);  
}




//No se puede usar sobre objetos, ya que un conjunto no es iterable:
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}


//La forma de usar for of en objetos seria con key:
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

