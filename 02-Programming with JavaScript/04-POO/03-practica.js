// Task 1: Code a Person class
class Person { // Clase base para representar una persona
    constructor(name = "Tom", age = 20, energy = 100) { // Constructor con atributos predeterminados
        this.name = name;         // Atributo: nombre del objeto
        this.age = age;           // Atributo: edad del objeto
        this.energy = energy;     // Atributo: nivel de energía del objeto
    }
    sleep() { // Método: simula que la persona duerme
        this.energy += 10; // Aumenta energía al dormir
        console.log("Energy is increasing, currently at: ", this.energy); // Muestra nueva energía
    }
    doSomethingFun() { // Método: simula diversión
        this.energy -= 10; // Disminuye energía al divertirse
        console.log("Energy is decreasing, currently at: ", this.energy); // Muestra nueva energía
    }
}

class Worker extends Person { // Clase hija que hereda de Person
    constructor(name, age, energy, xp = 0, hourlyWage = 10) { // Constructor con nuevos atributos
        super(name, age, energy); // Llama al constructor de la clase padre (Person)
        this.xp = xp; // Atributo: experiencia del trabajador
        this.hourlyWage = hourlyWage; // Atributo: salario por hora
    }
    goToWork() { // Método: simula trabajar
        this.xp += 10; // Aumenta experiencia al trabajar
        console.log("XP is increasing, currently at: ", this.xp); // Muestra nueva experiencia
    }
}

// Task 3: Code an intern object, run methods
function intern() { // Función para crear objeto de tipo Worker (interno)
    const internObj = new Worker("Bob", 21, 110, 0, 10); // Instancia con datos de interno
    internObj.goToWork(); // Llama al método para trabajar
    return internObj; // Devuelve el objeto creado
}

// Task 4: Code a manager object, methods
function manager() { // Función para crear objeto de tipo Worker (gerente)
    const managerObj = new Worker("Alice", 30, 120, 100, 30); // Instancia con datos de gerente
    managerObj.doSomethingFun(); // Llama al método heredado para divertirse
    return managerObj; // Devuelve el objeto creado
}
