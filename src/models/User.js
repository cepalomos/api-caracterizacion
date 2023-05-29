const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 50],
        },
      },

      edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 130,
        },
      },

      parentesco: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 20],
        },
      },

      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["masculino", "femenino", "lgtbi", "otro"]],
        },
      },
      isEstudio: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      estudio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [
            [
              "primaria",
              "iletrado",
              "bachillerato",
              "tecnico",
              "tecnico culminado",
              "tecnico inconcluso",
              "universitario",
              "universitario inconcluso",
              "universitario culminado",
            ],
          ],
        },
      },
      isUniversidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      etnia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [
            [
              "indigena",
              "afrodesendiente",
              "raizal",
              "palenquero",
              "Rom",
              "mestizo",
            ],
          ],
        },
      },
      actividad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [
            [
              "Campesino agrícola",
              "Campesino pecuario",
              "Campesino mixto",
              "Campesino piscícola",
              "Jornal",
              "Campesino y jornal",
              "Empleado público",
              "Madre comunitaria",
              "Ama de casa",
              "Comerciante",
              "Moto taxi",
              "Empleada doméstica",
              "Conductor",
              "Tendero",
              "Desempleo",
              "Trabaja como independiente",
              "Trabaja con el sector privado",
              "Otros",
            ],
          ],
        },
      },

      salario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      salud: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["contributivo", "subsidiado"]],
        },
      },
      ispension: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDiscapacitado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isVictima: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }
    // {
    //   timestamps: false,
    // }
  );
};
