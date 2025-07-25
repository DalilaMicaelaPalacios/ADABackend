
/*1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada 
clase2.  
2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.  
3.En este archivo, crea un objeto JSON que represente un libro. El objeto 
debe tener las siguientes propiedades: titulo, autor, año, genero (puede 
ser un array de géneros). 
Instrucciones: 
• Muestra en la consola el título y el autor del libro. 
• Actualiza el año del libro a un valor más reciente. 
• Añade una nueva propiedad llamada páginas que indique el número 
de páginas del libro. 
• Muestra el objeto actualizado en la consola.*/

const libro = {
  titulo: "El gran Gatsby",
  autor: "F. Scott Fitzgerald",
  año: 1925,
  genero: ["Ficción", "Clásico"]
};

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

libro.año = 2020;

libro.paginas = 180;

console.log("Objeto actualizado:", libro);
module.exports = libro;

