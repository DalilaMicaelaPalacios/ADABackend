/*Ejercicio 2: El menú del día 🍽️ 
Escribe una función que reciba un objeto con platos y precios, y devuelva 
los platos cuyo precio sea menor a $20. 
Consigna: 
• Usa un bucle for...in. 
• Usa objetos y arrays. 
let menu={
"ensalada":15,
"sopa":8,
"carne":25,
"pasta":18
};
*/

function obtenerPlatosEconomicos(menu) {
    let platosEconomicos = []; // Array para almacenar los platos económicos

    // Recorremos el objeto menu usando un bucle for...in
    for (let plato in menu) {
        // Verificamos si el precio del plato es menor a 20
        if (menu[plato] < 20) {
            platosEconomicos.push(plato); // Agregamos el plato al array si cumple la condición
        }
    }

    return platosEconomicos; // Devolvemos el array de platos económicos
}
// Ejemplo de uso
let menu = {
    "ensalada": 15,
    "sopa": 8,
    "carne": 25,
    "pasta": 18
};
console.log(obtenerPlatosEconomicos(menu)); // Debería imprimir ["ensalada", "sopa", "pasta"]
module.exports = obtenerPlatosEconomicos;



