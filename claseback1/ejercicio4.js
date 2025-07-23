/*Ejercicio 4: Contando vocales 🅰️🅾️ 
Crea una función que reciba una cadena de texto y devuelva cuántas 
vocales contiene. 
Consigna: 
• Usa un bucle for y condicionales. 
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).
ejemplo:
let texto = "Hola Mundo";
console.log(contarVocales(texto)); // Debería imprimir 4
*/


function contarVocales(texto) {
    let contador = 0; // Inicializamos un contador para las vocales
    const vocales = "aeiouAEIOU"; // Definimos las vocales en mayúsculas y minúsculas

    // Recorremos cada carácter de la cadena
    for (let i = 0; i < texto.length; i++) {
        // Verificamos si el carácter actual es una vocal
        if (vocales.includes(texto[i])) {
            contador++; // Incrementamos el contador si encontramos una vocal
        }
    }

    return contador; // Devolvemos el número de vocales encontradas
}
// Ejemplo de uso
let texto = "Hola Mundo";
console.log(contarVocales(texto)); // Debería imprimir 4
module.exports = contarVocales;

