const axios = require('axios');
const URL = "https://api.rawg.io/api/games/"
//https://api.rawg.io/api/games/{id}"


const getVideogameById = async (req, res) => {
    const  id  = req.params.idVideogame;
    
    try {
        const response = await axios.get(`${URL}${id}`+ '?key=' + process.env.DB_API_KEY);
        const data = response.data;
        const game = {
            id: data.id,
            Nombre: data.name,
            Descripción: data.description,
            Plataformas: data.platforms,
            Imagen: data.background_image,
            Lanzamiento: data.released,
            Rating: data.rating,
            Generos: data.genres
        };
        console.log(data.platforms)
        res.json(game);
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = getVideogameById;
