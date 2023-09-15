const axios = require('axios');
const URL = "https://api.rawg.io/api/genres?key=";
const { Genres } = require("../db");

const genres = async (req, res) => {
 try {

  const genresFromDatabase = await Genres.findAll();

  if (genresFromDatabase.length === 0){

    const response = await axios.get(URL + process.env.DB_API_KEY)
    const genres = response.data.results;

    for (const genre of genres) {
      await Genres.create({
        nombre: genre.name
      })
    }
  }
  

    const generos = await Genres.findAll();
    res.status(200).json(generos)
 } catch (error) {
    res.status(500).json({error: "Error"})
 }
};
    
  module.exports = genres;
              
          
          
    
