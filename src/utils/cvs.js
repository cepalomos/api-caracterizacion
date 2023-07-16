const { promises: { writeFile, mkdir, access } } = require('fs');

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

    const checkDirectory = async (path) => {
      try {
        await access(path);
        console.log('El directorio ya existe');
      } catch (error) {
        console.log('El directorio no existe, se creará');
        await mkdir(path);
      }
    };

    checkDirectory(directoryPath)
      .then(() => writeFile(`${directoryPath}/data.csv`, csvContent)) // Genera archivo CSV
      .then(() => writeFile(`${directoryPath}/data.json`, JSON.stringify(users))) // Genera archivo JSON
      .then(() => {
        console.log('Archivo generado exitosamente, abre la carpeta "download" para verificar');
        resolve();
      })
      .catch((error) => {
        console.error('Error al generar los archivos:', error);
        reject(error);
      });
  });
}

module.exports = createCvs;

