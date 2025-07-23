/*Ejercicio 8: Contador de letras      
Crea una función que reciba una cadena de texto y una letra, y devuelva 
cuántas veces aparece esa letra en la cadena. 
Consigna: 
• Usa un bucle for y condicionales. 
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas. 

ejemplo: 
let texto = "programar es divertido"
console.log(contarLetras(texto, "r")); // Debería imprimir 4 */

function contarLetras(texto, letra) {
    let contador = 0; // Inicializamos un contador para las letras

    // Convertimos el texto y la letra a minúsculas para facilitar la comparación
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();

    // Recorremos cada carácter de la cadena
    for (let i = 0; i < texto.length; i++) {
        // Verificamos si el carácter actual es igual a la letra buscada
        if (texto[i] === letra) {
            contador++; // Incrementamos el contador si encontramos la letra
        }
    }

    return contador; // Devolvemos el número de veces que aparece la letra
}   
// Ejemplo de uso
let texto = "programar es divertido";
console.log(contarLetras(texto, "r")); // Debería imprimir 4
module.exports = contarLetras;

