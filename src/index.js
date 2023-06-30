const server = require('./app');
const { conn } = require('./db.js');
const PORT_ENV = process.env.PORT ?? 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT_ENV, () => {
    console.log('%s listening at ' + PORT_ENV); // eslint-disable-line no-console
  });
}).catch(error => console.error(error));