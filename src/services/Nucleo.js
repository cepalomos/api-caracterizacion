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

const optionsNucleoDb = () => {
  return {
    zona: Nucleo.rawAttributes.zona.validate.isIn[0],
    vivienda: Nucleo.rawAttributes.vivienda.validate.isIn[0],
    area: Nucleo.rawAttributes.area.validate.isIn[0],
    techo: Nucleo.rawAttributes.techo.validate.isIn[0],
    paredes: Nucleo.rawAttributes.paredes.validate.isIn[0],
    piso: Nucleo.rawAttributes.piso.validate.isIn[0],
    numHabitaciones: Nucleo.rawAttributes.numHabitaciones.validate.isIn[0],
    numBanos: Nucleo.rawAttributes.numBanos.validate.isIn[0],
    conBanos: Nucleo.rawAttributes.conBanos.validate.isIn[0],
    preAlimentos: Nucleo.rawAttributes.preAlimentos.validate.isIn[0],
    eneCocina: Nucleo.rawAttributes.eneCocina.validate.isIn[0],
    agua: Nucleo.rawAttributes.agua.validate.isIn[0],
    residuos: Nucleo.rawAttributes.residuos.validate.isIn[0],
    servicios: [
      "energia",
      "acueducto",
      "alcantarillado",
      "recoleccion de residuos",
      "gas domiciliario",
    ],
  };
};

const updateNucleoDb = (id, dataUpdate) => {
  return Nucleo.update(dataUpdate, { where: { id } });
};

const deleteNucleoDb = (id) => {
  return Nucleo.destroy({ where: { id } });
};

module.exports = {
  allNucleoDb,
  createNucleoDb,
  optionsNucleoDb,
  updateNucleoDb,
  deleteNucleoDb,
};
