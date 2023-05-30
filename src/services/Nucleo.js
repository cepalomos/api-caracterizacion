const { Nucleo } = require("../db");

const allNucleoDb = (zona, corregimiento, vereda = "ninguna") => {
  return Nucleo.findAll({
    attributes: ["id", "direccion"],
    where: {
      zona: zona,
      corregimiento: corregimiento,
      vereda: vereda,
    },
  });
};

const createNucleoDb = (data) => {
  return Nucleo.create(data)
    .then(({ dataValues: { id, direccion } }) => ({ id, direccion }))
    .catch((error) => {
      console.error(error);
      throw { status: 500, message: "Error desconocido en la base de datos" };
    });
};
module.exports = {
  allNucleoDb,
  createNucleoDb,
};
