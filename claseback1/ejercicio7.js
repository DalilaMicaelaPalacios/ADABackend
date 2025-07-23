/*Ejercicio 7: Filtrar palabras largas         
Escribe una función que reciba un array de palabras y un número, y 
devuelva las palabras que tienen más caracteres que el número dado. 
Consigna: 
• Usa el método filter(). 
• Usa una función flecha para simplificar el código. 
ejemplo:
let palabras = ["javascript", "html", "css", "nodejs"];*/

function filtrarPalabrasLargas(palabras, longitud) {
    // Usamos el método filter para devolver las palabras que tienen más caracteres que la longitud dada
    return palabras.filter(palabra => palabra.length > longitud);
}
// Ejemplo de uso
let palabras = ["javascript", "html", "css", "nodejs"];
console.log(filtrarPalabrasLargas(palabras, 3)); // Debería imprimir ["javascript", "html", "nodejs"]
module.exports = filtrarPalabrasLargas;

