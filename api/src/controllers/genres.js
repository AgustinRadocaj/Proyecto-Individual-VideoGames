const axios = require('axios');
const URL = "https://api.rawg.io/api/genres?key=";
const { Genre } = require("../db");

const genres = async (req, res) => {
 try {

  const genresFromDatabase = await Genre.findAll();

  if (genresFromDatabase.length === 0){

    const response = await axios.get(URL + process.env.DB_API_KEY)
    const genres = response.data.results;

    for (const genre of genres) {
      await Genre.create({
        nombre: genre.name
      })
    }
  }
  

    const generos = await Genre.findAll();
    res.status(200).json(generos)
 } catch (error) {
    res.status(500).json({error: "Error"})
 }
};
    
  module.exports = genres;
              
          
          
    
