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

module.exports = {
  allNucleoDb,
};
