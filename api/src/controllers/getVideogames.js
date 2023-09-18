const axios = require("axios");
const URL = "https://api.rawg.io/api/games";
const { Videogame, Genres } = require("../db")

const getVideogames = async(req, res) => {
  try {
    
    const resp1 = (await axios.get(`${URL}?page_size=25&page=1&key=${process.env.DB_API_KEY}`)).data.results
    const resp2 = (await axios.get(`${URL}?page_size=25&page=2&key=${process.env.DB_API_KEY}`)).data.results
    const resp3 = (await axios.get(`${URL}?page_size=25&page=3&key=${process.env.DB_API_KEY}`)).data.results
    const resp4 = (await axios.get(`${URL}?page_size=25&page=4&key=${process.env.DB_API_KEY}`)).data.results
  
    const dbGames = await Videogame.findAll({
      include: Genres, 
    });

    const apiGames = [...resp1, ...resp2, ...resp3, ...resp4].map((game) => ({
      id: game.id,
      nombre: game.name,
      descripcion: game.description,
      plataformas: game.platforms.map((platform) => platform.platform.name),
      imagen: game.background_image,
      fechaLanzamiento: game.released,
      rating: game.rating,
      generos: game.genres.map((genre) => genre.name),
    }));

    
    const allGames = [...apiGames.slice(0, 100), ...dbGames.map((game) => ({
      id: game.id,
      nombre: game.nombre,
      descripcion: game.descripcion,
      plataformas: game.plataformas,
      imagen: game.imagen,
      fechaLanzamiento: game.fechaLanzamiento,
      rating: game.rating,
      generos: game.Genres.map((genre => genre.nombre)),
    }))];

    res.json(allGames);
  } catch (error) {
    console.error('Error al obtener los juegos', error);
    res.status(500).json({ mensaje: 'Error al obtener los juegos' });
  }
}


module.exports = getVideogames;