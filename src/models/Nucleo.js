const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("nucleo", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    zona: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["urbana", "rural"]],
      },
    },
    corregimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vereda: {
      type: DataTypes.STRING,
      defaultValue: "ninguna",
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    vivienda: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["propia", "arrendada", "familiar"]],
      },
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            "menos de 100 m²",
            "entre 100 m² y 500 m²",
            "entre 500 m² y 1000 m²",
            "1/4 de ha",
            "1/2 ha",
            "1 ha",
            "1.5 ha",
            "2 ha",
            "entre 3 y 5 has",
            "entre 5 has y 10 has",
            "entre 11 y 15 has",
            "entre 16 has y 20 has",
            "entre 21 has y 25 has",
            "entre 26 has y 30 has",
            "40 has",
            "más de 50 has",
          ],
        ],
      },
    },
    techo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["zinc", "palma", "eternit", "plastico"]],
      },
    },
    paredes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["bloque", "adobe", "bahareque", "plastico", "madera", "zinc"]],
      },
    },
    piso: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["cemento", "plantilla", "baldosa", "tierra"]],
      },
    },
    numHabitaciones: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["1", "2", "3", "4", "5", "Mas de 5"]],
      },
    },
    numBanos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["1", "2", "3", "mas de cuatro"]],
      },
    },
    conBanos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["alcantarillado", "pozo septico", "ninguna de las anteriores"]],
      },
    },
    preAlimentos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            "espacio dentro de la casa para este fin",
            "espacio fuera de la casa para este fin",
            "en una área improvisada",
          ],
        ],
      },
    },
    servicios: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        isValidOption: function (value) {
          const allowedOptions = [
            "energia",
            "acueducto",
            "alcantarillado",
            "recoleccion de residuos",
            "gas domiciliario",
          ];
          for (const option of value) {
            if (!allowedOptions.includes(option)) {
              throw new Error(`Opción no válida: ${option}`);
            }
          }
        },
      },
    },
    eneCocina: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            "electricidad",
            "petroleo",
            "gas residencial",
            "cilindro o pipeta",
            "leña",
          ],
        ],
      },
    },
    agua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            "acueducto por tuberia",
            "pozo con bomba",
            "pozo artesanal",
            "agua lluvia de algibe",
            "represa o jaguey",
            "rio",
            "arroyo",
          ],
        ],
      },
    },
    residuos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            "recoleccion publica o privada",
            "la entierran",
            "la queman",
            "disponen de lugar donde la echan",
            "hacen clasificación de residuos",
          ],
        ],
      },
    },
  });
};
