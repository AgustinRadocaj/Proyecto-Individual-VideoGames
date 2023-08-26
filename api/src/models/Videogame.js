const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    ID:{
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    Nombre:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripción:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    Plataformas:{
      type: DataTypes.ENUM("PlayStation", "PC", "SWITCH", "XBOX"),
      allowNull: false
    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Fecha_de_lanzamiento:{
      type: DataTypes.DATE,
      allowNull: false
    },
    Rating:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        min: 0,
        max: 10
      }
    }
  });
};
