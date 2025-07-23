/*Ejercicio 9: Números únicos     
Escribe una función que reciba un array de números y devuelva un nuevo 
array sin números repetidos. 
Consigna: 
• Usa el objeto Set para eliminar duplicados. 
• Convierte el Set a un array usando el operador spread (...).
let numeros = [1, 2, 3, 2, 4, 1, 5, ];
console.log(obtenernumerosUnicos(numeros)); // Debería imprimir [1, 2, 3, 4, 5]
*/

function obtenernumerosUnicos(arr) {
    const numerosUnicos = new Set(arr); // Creamos un Set con los números del array
    return [...numerosUnicos]; // Convertimos el Set a un array usando el operador spread
}
// Ejemplo de uso
let numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(obtenernumerosUnicos(numeros)); // Debería imprimir [1, 2, 3, 4, 5]
module.exports = obtenernumerosUnicos;  

