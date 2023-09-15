const {Videogame, Genres} = require("../db");

const createVideogame = async (req, res) => {
    try {
        const { nombre, imagen, descripcion, plataformas, fechaLanzamiento, rating, generos } = req.body;
        
        const asociarGeneros = await Promise.all(
            generos.map(async (genero) => {
                let [genre] = await Genres.findOrCreate({
                    where: { nombre: genero },
                });
                return genre;
            })
        );
        const nuevoVideogame = {
            nombre, 
            descripcion, 
            plataformas, 
            imagen, 
            fechaLanzamiento, 
            rating
         };

        const videojuegoDB = await Videogame.create(nuevoVideogame)
        await videojuegoDB.addGenres(asociarGeneros)

        res.status(201).json({created: "OK"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al agregar el juego a la base de datos' });
    }
}
   
module.exports = createVideogame;


