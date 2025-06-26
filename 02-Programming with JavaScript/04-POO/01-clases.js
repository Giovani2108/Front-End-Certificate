// Definición de clase Train (tren básico)
class Train {
    constructor(color, lightsOn) {
        this.color = color; // Asigna color al tren
        this.lightsOn = lightsOn; // Estado inicial de las luces (true/false)
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn; // Invierte el estado de las luces
    }

    lightsStatus() {
        console.log('Lights on?', this.lightsOn); // Muestra estado de luces
    }

    getSelf() {
        console.log(this); // Muestra el propio objeto (instancia)
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this); // Obtiene el prototipo (clase)
        console.log(proto); // Muestra el prototipo (métodos heredados, etc.)
    }
}

// Crear instancia de Train
var myFirstTrain = new Train('red', false); // Nuevo tren rojo, luces apagadas
console.log(myFirstTrain); // Muestra objeto creado

// Subclase que hereda de Train
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); // Llama al constructor de Train (hereda color y luces)
        this.passengers = passengers; // Asigna número de pasajeros
        this.highSpeedOn = highSpeedOn; // Estado del modo alta velocidad
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn; // Cambia estado de alta velocidad
        console.log('High speed status:', this.highSpeedOn); // Muestra estado
    }

    toggleLights() {
        super.toggleLights(); // Llama método toggleLights() de Train
        super.lightsStatus(); // Llama método lightsStatus() de Train
        console.log('Lights are 100% operational.'); // Mensaje personalizado
    }
}

// Crear más instancias de Train
var mySecondTrain = new Train('blue', false); // Tren azul, luces apagadas
var myThirdTrain = new Train('blue', false);  // Otro tren azul, luces apagadas

var train4 = new Train('red', false); // Tren rojo
train4.toggleLights(); // Enciende las luces
train4.lightsStatus(); // Muestra estado: true
train4.getSelf(); // Muestra el objeto train4
train4.getPrototype(); // Muestra el prototipo de train4 (métodos de clase)

var train5 = new Train('blue', false); // Otro tren azul
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false); // Tren rápido verde

train5.toggleLights(); // Enciende luces
train5.lightsStatus(); // Muestra estado de luces

highSpeed1.toggleLights(); // Enciende luces + muestra mensaje extendido









// Clase StationaryBike (bicicleta fija)
class StationaryBike {
    constructor(position, gears) {
        this.position = position; // Posición dentro del gimnasio
        this.gears = gears; // Número de velocidades o marchas
    }
}

// Clase Treadmill (caminadora)
class Treadmill {
    constructor(position, modes) {
        this.position = position; // Posición dentro del gimnasio
        this.modes = modes; // Número de modos disponibles
    }
}

// Clase Gym (gimnasio que contiene equipos)
class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs; // Horario de apertura
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8); // Crea bici con 8 marchas
        this.treadmill = new Treadmill(treadmillPos, 5); // Crea caminadora con 5 modos
    }
}

// Crear una instancia de gimnasio
var boxingGym = new Gym("7-22", "right corner", "left corner"); // Horario y ubicación de máquinas

console.log(boxingGym.openHrs); // Muestra horario de apertura
console.log(boxingGym.stationaryBike); // Muestra la bici
console.log(boxingGym.treadmill); // Muestra la caminadora
