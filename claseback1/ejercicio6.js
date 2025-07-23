/*Ejercicio 6: Calculadora de promedio        
Escribe una función que reciba un array de números y devuelva el 
promedio. 
Consigna: 
• Usa un bucle for para sumar los números. 
• Divide la suma total entre la cantidad de elementos del array.
ejemplo:
let calificaciones = [8,9,10,7,6];
console.log(calcularPromedio(calificaciones)); // Debería imprimir 8 */

function calcularPromedio(calificaciones) {
    let suma = 0; // Inicializamos la suma en 0

    // Usamos un bucle for para recorrer el array y sumar los números
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i]; // Sumamos cada calificación a la suma total
    }

    // Calculamos el promedio dividiendo la suma entre la cantidad de elementos
    return suma / calificaciones.length;
}
// Ejemplo de uso
let calificaciones = [8, 9, 10, 7, 6];
console.log(calcularPromedio(calificaciones)); // Debería imprimir 8
module.exports = calcularPromedio;

