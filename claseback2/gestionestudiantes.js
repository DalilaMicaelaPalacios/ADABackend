//ejercicio4.js , archivo gestionestudiantes.js
// Este archivo gestiona un array de estudiantes importado desde estudiantes.js

const estudiantes = require("./estudiantes");
// Mostramos los nombres de todos los estudiantes
estudiantes.forEach(estudiante => {
  console.log("Nombre del estudiante:", estudiante.nombre);
});

// Calculamos y mostramos el promedio de notas de un estudiante específico
const calcularPromedioNotas = (notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};
const estudianteEspecifico = estudiantes[0]; // Por ejemplo, el primer estudiante
const promedioNotas = calcularPromedioNotas(estudianteEspecifico.notas);
console.log(`Promedio de notas de ${estudianteEspecifico.nombre}:`, promedioNotas
);
// Muestra el array de estudiantes en formato JSON
console.log("Array de estudiantes en formato JSON:", JSON.stringify(estudiantes, null, 2
));

// Mostramos el array de estudiantes en formato JSON
// Agregamos un nuevo estudiante al array
const nuevoEstudiante = {
  nombre: "Carlos Fernández",
  edad: 23,
    curso: "Backend Development",
    notas: [8, 9, 7]
};
estudiantes.push(nuevoEstudiante);
// Mostramos el array actualizado en formato JSON
console.log("Array actualizado de estudiantes:", JSON.stringify(estudiantes, null, 2));
module.exports = estudiantes;
// Exportamos el array de estudiantes para que pueda ser utilizado en otros archivos