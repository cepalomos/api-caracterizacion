const { response } = require("../response/response");
const { allNucleoDb } = require("../services/Nucleo");

const allNucleo = (req, res, next) => {
  const { zona, corregimiento, vereda } = req.query;
  return allNucleoDb(zona, corregimiento, vereda)
    .then((nucleos) => {
      if (!nucleos.legth) {
        throw { status: 404, message: "No hay datos en la base de datos" };
      }
      response(req, res, next, 200, "Se encontraron datos", nucleos);
    })
    .catch((error) => {
      console.error(error);
      if (!error.status)
        next({ status: 404, message: "Error en la base de datos" });
      else next(error);
    });
};

module.exports = { allNucleo };
