const { response } = require("../response/response");
const {
  allNucleoDb,
  createNucleoDb,
  optionsNucleoDb,
} = require("../services/Nucleo");

const allNucleo = (req, res, next) => {
  const { zona, corregimiento, vereda } = req.query;
  return allNucleoDb(zona, corregimiento, vereda)
    .then((nucleos) => {
      if (!nucleos.length) {
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

const createNucleo = (req, res, next) => {
  const data = req.body;
  return createNucleoDb(data)
    .then((nucleo) =>
      response(req, res, next, 201, "Nucleo creado con exito", nucleo)
    )
    .catch((error) => {
      console.error(error);
      next(error);
    });
};

const optionsNucleo = (req, res, next) => {
  try {
    const options = optionsNucleoDb();
    return response(
      req,
      res,
      next,
      200,
      "opciones de campos de base de datos",
      options
    );
  } catch (error) {
    console.error(error);
    next({ status: 500, message: "Error desconocido en la base datos" });
  }
};

module.exports = { allNucleo, createNucleo, optionsNucleo };
