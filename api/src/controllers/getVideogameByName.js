const axios = require('axios');
const API_URL = "https://api.rawg.io/api/games/";



const getVideogamesByName = async (req, res) => {
    const query = req.query.q; // Obtiene el valor de la query "q"

    // Función para buscar en la base de datos simulada
    const searchInDatabase = () => {
        return videojuegosDB.filter(vj => vj.nombre.toLowerCase().includes(query.toLowerCase())).slice(0, 15);
    };

    // Función para buscar en la API
    const searchInAPI = async () => {
        try {
            const response = await axios.get(`${API_URL}?search=${query}`);
            return response.data.results.slice(0, 15);
        } catch (error) {
            return [];
        }
    };

    // Realizar la búsqueda en la base de datos y en la API
    const resultsDB = searchInDatabase();
    const resultsAPI = await searchInAPI();

    // Combinar los resultados de la base de datos y la API
    const combinedResults = [...resultsDB, ...resultsAPI];

    if (combinedResults.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron videojuegos.' });
    }

    res.json(combinedResults);
};

module.exports = getVideogamesByName;

