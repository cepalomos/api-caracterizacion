const { createObjectCsvWriter } = require('csv-writer');
const { promises: { writeFile, rmdir, mkdir } } = require('fs');

function createCvs(users) {
  return new Promise((resolve, reject) => {
    let title = Object.keys(users[0]);
    let csvContent = '\ufeff' + title.join(',') + '\n';

    // Agrega el cuerpo
    users.forEach((item) => {
      let c = Object.values(item).join(',') + '\n';
      csvContent += c;
    });

    const directoryPath = 'download';

    rmdir(directoryPath, { recursive: true }) // Elimina el directorio existente
      .then(() => mkdir(directoryPath)) // Crea el directorio nuevamente
      .then(() => writeFile(`${directoryPath}/data.csv`, csvContent)) // Genera archivo CSV
      .then(() => writeFile(`${directoryPath}/data.json`, JSON.stringify(users))) // Genera archivo JSON
      .then(() => {
        console.log('File generated successfully, open download to check');
        resolve();
      })
      .catch((error) => {
        console.error('Error generating files:', error);
        reject(error);
      });
  });
}

module.exports = createCvs;


    


  // // Convertir los usuarios en un arreglo de objetos plano
  // const userData = users.map(user => user.toJSON());

  // // Definir el nombre y la ubicación del archivo CSV
  // const csvFilePath = "usuarios.csv";

  // // Definir el encabezado del archivo CSV
  // const csvWriter = createObjectCsvWriter({
  //   path: csvFilePath,
  //   header: [
  //     { id: 'id', title: 'ID' },
  //     { id: 'nombre', title: 'Nombre' },
  //     { id: 'edad', title: 'Edad' },
  //     { id: 'parentesco', title: 'Parentesco' },
  //     { id: 'sexo', title: 'Sexo' },
  //     { id: 'isEstudio', title: 'Estudio' },
  //     { id: 'isUniversidad', title: 'Universidad' },
  //     { id: 'etnia', title: 'Etnia' },
  //     { id: 'actividad', title: 'Actividad' },
  //     { id: 'salario', title: 'Salario' },
  //     { id: 'salud', title: 'Salud' },
  //     { id: 'isPension', title: 'Pensión' },
  //     { id: 'isDiscapacitado', title: 'Discapacitado' },
  //     { id: 'isVictima', title: 'Víctima' },
  //   ]
  // });

  // // Escribir los datos en el archivo CSV
  // csvWriter
  //   .writeRecords(userData)
  //   .then(() => console.log("Archivo CSV generado con éxito"))
  //   .catch(error => console.error("Error al escribir en el archivo CSV:", error));