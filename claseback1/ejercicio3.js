/*Ejercicio 3: Ordenando números     
Crea una función que reciba un array de números y devuelva un nuevo 
array con los números ordenados de menor a mayor. 
Consigna: 
• Usa el método sort(). 
ejemplo:
let numeros = [5, 2, 9, 1, 7];
console.log(ordenarNumeros(numeros)); // Debería imprimir [1, 2, 5, 7, 9]*/

function ordenarNumeros(arr) {
    // Usamos el método sort para ordenar los números de menor a mayor
    return arr.sort((a, b) => a - b);
}

// Ejemplo de uso
let numeros = [5, 2, 9, 1, 7];
console.log(ordenarNumeros(numeros)); // Debería imprimir [1, 2, 5, 7, 9]
module.exports = ordenarNumeros;


