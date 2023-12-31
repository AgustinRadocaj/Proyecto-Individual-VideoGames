const axios = require('axios');
const URL = "https://api.rawg.io/api/games?search=";
const { Videogame, Genres } = require("../db");
const { Op } = require('sequelize');

const getVideogamesByName = async (req, res) => {
  const { name } = req.params;

  try {
   
    const dbGames = await Videogame.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${name}%`, 
        },
      },
      include: Genres,
    });

    console.log(dbGames)

    const apiResponse = await axios.get(URL + name + `&key=` + process.env.DB_API_KEY);

    const apiGames = apiResponse.data.results;

    const mergedGames = [
      ...dbGames.map((dbGame) => ({
        id: dbGame.id,
        nombre: dbGame.nombre,
        descripcion: dbGame.descripcion,
        plataformas: dbGame.plataformas,
        imagen: dbGame.imagen,
        fechaLanzamiento: dbGame.fechaLanzamiento,
        rating: dbGame.rating,
        generos: dbGame.Genres.map((genre) => genre.nombre)
      })),
      ...apiGames.map((apiGame) => ({
        id: apiGame.id,
        nombre: apiGame.name,
        descripcion: apiGame.description,
        plataformas: apiGame.platforms.map((platform) => platform.platform.name),
        imagen: apiGame.background_image,
        fechaLanzamiento: apiGame.released,
        rating: apiGame.rating,
        generos: apiGame.genres.map((genre) => genre.name),
      })),
    ];

    const first15Results = mergedGames.slice(0, 15);
    console.log(dbGames)
    res.json(first15Results);
  } catch (error) {
    console.error('Error al buscar juegos por nombre', error);
    res.status(500).json({ mensaje: 'Error al buscar juegos por nombre' });
  }
};

module.exports = getVideogamesByName;

