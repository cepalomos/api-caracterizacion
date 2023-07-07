const { createObjectCsvWriter } = require('csv-writer');
function createCvs(users) {
  // Convertir los usuarios en un arreglo de objetos plano
  const userData = users.map(user => { user.toJSON() });

  // Definir el nombre y la ubicación del archivo CSV
  const csvFilePath = "usuarios.csv";

  // Definir el encabezado del archivo CSV
  const csvWriter = createObjectCsvWriter({
    path: csvFilePath,
    header: [
      { id: 'id', title: 'ID' },
      { id: 'nombre', title: 'Nombre' },
      { id: 'edad', title: 'Edad' },
      { id: 'parentesco', title: 'Parentesco' },
      { id: 'sexo', title: 'Sexo' },
      { id: 'isEstudio', title: 'Estudio' },
      { id: 'isUniversidad', title: 'Universidad' },
      { id: 'etnia', title: 'Etnia' },
      { id: 'actividad', title: 'Actividad' },
      { id: 'salario', title: 'Salario' },
      { id: 'salud', title: 'Salud' },
      { id: 'isPension', title: 'Pensión' },
      { id: 'isDiscapacitado', title: 'Discapacitado' },
      { id: 'isVictima', title: 'Víctima' },
    ]
  });

  // Escribir los datos en el archivo CSV
  csvWriter
    .writeRecords(userData)
    .then(() => console.log("Archivo CSV generado con éxito"))
    .catch(error => console.error("Error al escribir en el archivo CSV:", error));
}
module.exports = createCvs;