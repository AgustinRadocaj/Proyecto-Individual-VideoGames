const axios = require("axios");
const URL = "https://api.rawg.io/api/games?key=";


const getVideogames = async(req, res) => {
    try {
        const response = await axios.get(URL + process.env.DB_API_KEY)
        const videogames = response.data;
        res.status(200).json(videogames)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getVideogames;