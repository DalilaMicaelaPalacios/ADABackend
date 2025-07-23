/*Ejercicio 1: ¿Quién puede entrar al parque?                  
Tienes un parque de diversiones que permite la entrada a personas 
mayores de 12 años y menores de 60. Escribe una función que reciba una 
lista de edades y devuelva cuántas personas pueden entrar al parque. 
Consigna: 
• Usa un bucle for y condicionales. 
• Usa un array como entrada de la función. 
• Devuelve el número de personas que cumplen con los requisitos.
ejemplo:
let edades = [10, 15, 35, 65, 12, 59];
console.log(PersonasquePuedenEntrar(edades)); // Debería imprimir 4

*/
function PersonasQuePuedenEntrar(edades) {
    let contador = 0; // Inicializamos un contador para las personas que pueden entrar

    // Recorremos el array de edades
    for (let i = 0; i < edades.length; i++) {
        // Verificamos si la edad está dentro del rango permitido
        if (edades[i] > 12 && edades[i] < 60) {
            contador++; // Incrementamos el contador si la persona puede entrar
        }
    }

    return contador; // Devolvemos el número de personas que pueden entrar
}

// Ejemplo de uso
let edades = [10, 15, 35, 65, 13, 59];
console.log(PersonasQuePuedenEntrar(edades)); // Debería imprimir 4
module.exports = PersonasQuePuedenEntrar; 
