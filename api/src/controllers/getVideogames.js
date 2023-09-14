const axios = require("axios");
const URL = "https://api.rawg.io/api/games?key=";
const { Videogame } = require("../db")

const getVideogames = async(req, res) => {
  try {
    
    const apiResponse = await axios.get(URL + process.env.DB_API_KEY + '&page_size=100');

    const dbGames = await Videogame.findAll();

    const apiGames = apiResponse.data.results.map((game) => ({
      nombre: game.name,
      descripcion: game.description,
      plataformas: game.platforms.map((platform) => platform.platform.name).join(', '),
      imagen: game.background_image,
      fechaLanzamiento: game.released,
      rating: game.rating,
      generos: game.genres.map((genre) => genre.name),
    }));

    
    const allGames = [...apiGames, ...dbGames.map((game) => ({
      nombre: game.nombre,
      descripcion: game.descripcion,
      plataformas: game.plataformas,
      imagen: game.imagen,
      fechaLanzamiento: game.fechaLanzamiento,
      rating: game.rating,
      generos: game.generos.split(', '),
    }))];

    res.json(allGames);
  } catch (error) {
    console.error('Error al obtener los juegos', error);
    res.status(500).json({ mensaje: 'Error al obtener los juegos' });
  }
}


module.exports = getVideogames;