const axios = require('axios');
const URL = "https://api.rawg.io/api/games?search=";

const getVideogamesByName = async (req, res) => {
      const games = req.params.name.toLowerCase();
      console.log({name: games})

      try {
        const response = await axios.get(URL + games + `&key=` + process.env.DB_API_KEY)
        const juegos = response.data.results.slice(0, 15)

        res.json(juegos)

      } catch (error) {
        res.status(500).json(error.message)
      }
    };

module.exports = getVideogamesByName;

