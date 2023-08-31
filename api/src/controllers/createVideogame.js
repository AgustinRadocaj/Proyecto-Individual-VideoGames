const createVideogame = (req, res) => {
    const { nombre, descripcion, generos } = req.body;

    if (!nombre || !descripcion || !generos || generos.length === 0) {
        return res.status(400).json({ mensaje: 'Faltan datos obligatorios.' });
    }

    // Obtener los géneros por sus IDs
    const generosSeleccionados = generos.map(generoId => {
        return generosDB.find(genero => genero.id === generoId);
    });

    if (generosSeleccionados.some(genero => !genero)) {
        return res.status(400).json({ mensaje: 'Uno o más géneros no existen.' });
    }

    // Crear el nuevo videojuego
    const nuevoVideojuego = {
        id: videojuegosDB.length + 1, // Simulación de asignación de ID
        nombre,
        descripcion,
        generos: generosSeleccionados
    };

    // Agregar el videojuego a la base de datos
    videojuegosDB.push(nuevoVideojuego);

    res.status(201).json(nuevoVideojuego);
};

module.exports = createVideogame;
