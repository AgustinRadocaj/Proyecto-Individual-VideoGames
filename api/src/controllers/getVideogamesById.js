const axios = require('axios');
const URL = "https://api.rawg.io/api/games/"
const{Videogame, Genres} = require("../db")

const getVideogameById = async (req, res) => {
    const { idVideogame } = req.params;

  try {
    
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (uuidRegex.test(idVideogame)) {
      const dbGame = await Videogame.findOne({
        where: { id: idVideogame },
        include: Genres,
      });

    if (dbGame) {
      
      const responseObject = {
        id: dbGame.id,
        nombre: dbGame.nombre,
        descripcion: dbGame.descripcion,
        plataformas: dbGame.plataformas,
        imagen: dbGame.imagen,
        fechaLanzamiento: dbGame.fechaLanzamiento,
        rating: dbGame.rating,
        generos: dbGame.Genres.map((genre => genre.nombre)), 
      };
      res.json(responseObject);
    }} else {
      
      const apiResponse = await axios.get(URL + `${idVideogame}` + `?key=` + process.env.DB_API_KEY);
      const apiGame = apiResponse.data;

      if (apiGame) {
        
        const responseObject = {
          id: apiGame.id,
          nombre: apiGame.name,
          descripcion: apiGame.description,
          plataformas: apiGame.platforms.map((platform) => platform.platform.name),
          imagen: apiGame.background_image,
          fechaLanzamiento: apiGame.released,
          rating: apiGame.rating,
          generos: apiGame.genres.map((genre) => genre.name),
        };
        res.json(responseObject);
      } else {
        
        res.status(404).json({ mensaje: 'Juego no encontrado' });
      }
    }
  } catch (error) {
    console.error('Error al obtener el juego por ID', error);
    res.status(500).json({ mensaje: 'Error al obtener el juego por ID' });
  }
}

module.exports = getVideogameById;
