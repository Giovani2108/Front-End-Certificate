
// break y continue se usan para todos los loops:
// while, do-while, for, for in, for of

let i = 0;

while (i<6){
    i++; //Antes para asegurar el incremento

    if (i ===2){
        continue; // Termina la Iteracion
    }

    if (i ===4){
        break; //Termina el bucle
    }

    console.log(i)
}