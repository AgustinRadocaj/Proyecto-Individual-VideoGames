const axios = require('axios');
const URL = "https://api.rawg.io/api/genres?key=";

const genres =  async (req, res) => {
       try {
           const response = await axios.get(URL + process.env.DB_API_KEY)
            const data = response.data.results
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

module.exports = genres;
            
