const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('InOut', {
    id : {
      type: DataTypes.STRING,
      primaryKey: true
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps : false,
  });
};



