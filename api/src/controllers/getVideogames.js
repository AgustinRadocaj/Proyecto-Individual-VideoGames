const axios = require("axios");
const URL = "https://api.rawg.io/api/games?key=";
const { Videogame } = require("../db")

const getVideogames = async(req, res) => {
    
    try {
        const DbGames = await Videogame.findAll()
        const response = await axios.get(`${URL}${process.env.DB_API_KEY}`)
        const videogames = response.data.results;
        
        const allGames = [...DbGames, ...videogames]
        
        res.status(200).json(allGames)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getVideogames;