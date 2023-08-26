const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("Genre", {
        ID:{
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        Nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}