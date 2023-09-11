const {Videogame, Genre} = require("../db");

const createVideogame = (req, res) => {
    const { name, description, genres } = req.body;

    if (!name || !description || !genres || genres.length === 0) {
        return res.status(400).json({ mensaje: 'Faltan datos obligatorios.' });
    }

    
    const generosSeleccionados = genres.map(generoId => {
        return Genre.find(genres => genres.id === generoId);
    });

    if (generosSeleccionados.some(genres => !genres)) {
        return res.status(400).json({ mensaje: 'Uno o más géneros no existen.' });
    }

    // Crear el nuevo videojuego
    const nuevoVideojuego = {
        id: Videogame.length + 1, // Simulación de asignación de ID
        name,
        description,
        genres: generosSeleccionados
    };

    // Agregar el videojuego a la base de datos
    Videogame.push(nuevoVideojuego);

    res.status(201).json(nuevoVideojuego);
};

module.exports = createVideogame;
