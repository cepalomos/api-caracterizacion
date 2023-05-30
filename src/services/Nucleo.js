const { Nucleo } = require("../db");

const allNucleoDb = (
  zonaParam,
  corregimientoParam,
  veredaParam = "ninguna"
) => {
  return Nucleo.findAll({
    where: {
      zona: zonaParam,
      corregimiento: corregimientoParam,
      vereda: veredaParam,
    },
    attributes: ["id", "direccion"],
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
