
let accion = 'listar';

/**
 * // Un switch es como un bloque de código
 * pero seccionado por niveles.
 * En cuanto se cumpla 1 caso leyendo de arriba hacia abajo,
 * se empezarán a ejecutar todas las instrucciones
 * desde ese nivel hacia abajo, sin importar si
 * los casos siguientes se cumplen de verdad. Por eso se usa break
 * 
 */

switch (accion){
    case 'listar':
        console.log('Accion de listar');
        break; //Colocar break al final de cada caso
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default: // si ninguno de los casos se cumple
        console.log('Acción no reconocida');
}