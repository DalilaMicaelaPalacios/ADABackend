/*Ejercicio 10: Invertir palabras     
Crea una función que reciba una cadena de texto y devuelva otra cadena 
con las palabras en orden inverso. 
Consigna: 
• Usa el método split() para separar las palabras. 
• Usa el método reverse() para invertir el array. 
• Usa el método join() para unir las palabras en una nueva cadena.
let frase = "programar es divertido";*/

function invertirPalabras(frase) {
    // Dividimos la frase en un array de palabras
    let palabras = frase.split(" ");
    
    // Invertimos el array de palabras
    palabras.reverse();
    
    // Unimos las palabras en una nueva cadena
    return palabras.join(" ");
}
// Ejemplo de uso
let frase = "programar es divertido";
console.log(invertirPalabras(frase)); // Debería imprimir "divertido es programar"
module.exports = invertirPalabras;
