const axios = require('axios');
const URL = "https://api.rawg.io/api/genres";

const genres =  async (req, res) => {
    // Si la base de datos está vacía, obtener géneros de la API y guardarlos en la base de datos
    if (generosDB.length === 0) {
        try {
            const response = await axios.get(URL);
            const generosAPI = response.data.results;

            // Guardar los géneros en la base de datos
            generosAPI.forEach(genero => {
                generosDB.push({ id: genero.id, nombre: genero.name });
            });
        } catch (error) {
            return res.status(500).json({ mensaje: 'Error al obtener los géneros de la API.' });
        }
    }

    // Responder con los géneros de la base de datos
    res.json(generosDB);
};

module.exports = genres;
