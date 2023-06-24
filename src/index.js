const server = require('./app');
const { conn } = require('./db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(5000, () => {
    console.log('%s listening at 5000'); // eslint-disable-line no-console
  });
}).catch(error => console.error(error));