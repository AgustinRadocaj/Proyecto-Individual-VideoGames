const {Videogame} = require("../db");

const createVideogame = async (req, res) => {
    try {
        const { nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating } = req.body;

        const nuevoVideogame = await Videogame.create({
            nombre, 
            descripcion, 
            plataformas, 
            imagen, 
            fechaLanzamiento, 
            rating 
        });

        res.status(201).json(nuevoVideogame)
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al agregar el juego a la base de datos' });
    }
}
   

module.exports = createVideogame;
