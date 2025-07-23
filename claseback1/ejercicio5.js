/*Ejercicio 5: Generador de iniciales 🅰️ 
Escribe una función que reciba un nombre completo y devuelva las 
iniciales en mayúsculas. 
Consigna: 
• Usa el método split() para dividir el nombre. 
• Usa un bucle for y métodos de string.
ejemplo:
let nombre = "Juan Perez Gomez";
console.log(generarIniciales(nombre)); // Debería imprimir "JPG"*/

function generarIniciales(nombreCompleto) {
    // Dividimos el nombre completo en un array de palabras
    let palabras = nombreCompleto.split(" ");
    let iniciales = ""; // Inicializamos una cadena para almacenar las iniciales

    // Recorremos cada palabra del array
    for (let i = 0; i < palabras.length; i++) {
        // Tomamos la primera letra de cada palabra y la convertimos a mayúsculas
        iniciales += palabras[i].charAt(0).toUpperCase();
    }

    return iniciales; // Devolvemos las iniciales generadas
}
// Ejemplo de uso
let nombre = "Juan Perez Gomez";
console.log(generarIniciales(nombre)); // Debería imprimir "JPG"
module.exports = generarIniciales;


