const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Videogame', {
  customId: {
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  plataformas: {
    type: DataTypes.JSONB, 
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaLanzamiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})};

