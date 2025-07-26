/*Ejercicio 2: Conversión de Objetos JavaScript a JSON  
1.En la misma carpeta clase2, crea un nuevo archivo llamado 
actividad2.js.  
2.Crea un objeto en JavaScript que represente a un estudiante con las 
siguientes propiedades: nombre, edad, curso, notas (un array de 
números). 
Instrucciones: 
• Convierte este objeto a una cadena JSON usando JSON.stringify(). 
• Muestra la cadena JSON en la consola. 
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
JSON.parse() y muestra el objeto en la consola.*/

const estudiante = {
  nombre: "Juan Lopez",
  edad: 22,
    curso: "Desarrollo Web",
    notas: [8, 9, 10, 7]
};  

const estudianteJSON = JSON.stringify(estudiante); // Convertimos el objeto a una cadena JSON
console.log("Cadena JSON:", estudianteJSON);// Mostramos la cadena JSON en la consola

const estudianteObjeto = JSON.parse(estudianteJSON);// Convertimos la cadena JSON de nuevo a un objeto
console.log("Objeto JavaScript:", estudianteObjeto);// Mostramos el objeto en la consola

module.exports = { estudiante, estudianteJSON, estudianteObjeto };// Exportamos los objetos para poder usarlos en otros archivos

