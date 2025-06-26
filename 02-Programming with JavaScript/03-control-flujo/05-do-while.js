let i = 2;

// La diferencia es que el do-while primero se ejecuta 1 vez
do{
    if (i%2 == 0){
        console.log("número par", i);  
    }
    i++;
}while (i<2); // y evalua al final

console.log("Fuera de do-while");
