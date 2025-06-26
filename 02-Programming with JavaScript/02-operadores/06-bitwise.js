// Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// // bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000111 -> 6


// bitwise de OR
console.log(1 | 4);
// 00000001 +   1 en binario
// 00000100 =   4 en binario
//------------
// 00000101   ---> RESULTADO
// Genera un nuevo byte con todos los 1 que tenga cada uno



// bitwise de AND
console.log(1 & 4);
// 00000001 +   1 en binario
// 00000100 =   4 en binario
//------------
// 00000000   ---> RESULTADO
// Genera un nuevo byte con todos los 1 que coincidan ambos