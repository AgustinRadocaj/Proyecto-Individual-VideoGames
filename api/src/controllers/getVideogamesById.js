const axios = require('axios');
const URL = "https://api.rawg.io/api/games/"

const getVideogameById = async (req, res) => {
    const { id } = req.params

    try {
        const response = await axios.get(`${URL}${id}`);
        const data = response.data;
        const game = {
            id: data.id,
            Nombre: data.Nombre, 
            Descripción: data.Descripción,
            Plataformas: data.Plataformas, 
            Imagen: data.Imagen, 
            Fecha_de_lanzamiento: data.Fecha_de_lanzamiento, 
            Rating: data.Rating
        }
        res.json(game);
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = getVideogameById;
