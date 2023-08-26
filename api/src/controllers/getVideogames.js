const axios = require("axios");
const URL = "https://api.rawg.io/api/games";


const getVideogames = async(req, res) => {
    try {
        const response = await axios.get(URL);
        const videogames = response.data;
        res.json(videogames)
    } catch (error) {
        res.status(500),json(error.message)
    }
}

module.exports = getVideogames;