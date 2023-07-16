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
