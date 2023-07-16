const { response } = require("../response/response");
const {
  allNucleoDb,
  createNucleoDb,
  optionsNucleoDb,
  updateNucleoDb,
  deleteNucleoDb,
  allTableNucleo,
} = require("../services/Nucleo");
const createCvs = require("../utils/cvs");

const allNucleo = (req, res, next) => {
  const { zona, corregimiento, vereda } = req.query;
  const decCorregimiento = decodeURIComponent(corregimiento);
  let decVereda;
  if (!vereda) {
    decVereda = "ninguna"
  } else {
    decVereda = decodeURIComponent(vereda);
  }
  return allNucleoDb(zona, decCorregimiento, decVereda)
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

const updateNucleo = (req, res, next) => {
  const { dataUpdate, id } = req.body;
  return updateNucleoDb(id, dataUpdate)
    .then((nucleoUpdate) =>
      response(req, res, next, 200, "Actualizacion exitosa", nucleoUpdate)
    )
    .catch((error) => {
      console.error(error);
      next({ status: 400, message: "Error en el servidor" });
    });
};

const deleteNucleo = (req, res, next) => {
  const { id } = req.body;
  return deleteNucleoDb(id)
    .then((nucleoDestroy) =>
      response(req, res, next, 200, "Nucleo eliminado", nucleoDestroy)
    )
    .catch((error) => {
      console.log(error);
      next({ status: 404, message: "No se encotro el nucleo" });
    });
};

const generateCvsNucleo = (req, res, next) => {
  allTableNucleo()
    .then(cores => {
      return createCvs(cores);
    })
    .then(() => {
      const csvFilePath = "download/data.csv";

      // Descargar el archivo CSV
      res.download(csvFilePath, "nucleo.csv", err => {
        if (err) {
          console.error("Error al descargar el archivo CSV:", err);
        } else {
          console.log("Archivo CSV descargado exitosamente");
        }
      });
    })
    .catch(error => {
      console.error(error);
      next({ "status": 500, "message": "Error desconocido" });
    });
};
module.exports = {
  allNucleo,
  createNucleo,
  optionsNucleo,
  updateNucleo,
  deleteNucleo,
  generateCvsNucleo,
};
