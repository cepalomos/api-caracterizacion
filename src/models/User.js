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

      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
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
          len: [0, 20],
        },
      },

      actividad: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      salario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
