const { Router } = require('express');
const getVideogames = require("../controllers/getVideogames");
const getVideogameById = require("../controllers/getVideogamesById");
const createVideogame = require("../controllers/createVideogame");
const getVideogameByName = require("../controllers/getVideogameByName");
const genres = require("../controllers/genres");
const router = Router();


router.get("/videogames", getVideogames);

router.get("/videogames/:idVideogame", getVideogameById);

router.get("/videogames/name?='...'", getVideogameByName);

router.post("/videogames", createVideogame);

router.get("/genres", genres);

module.exports = router;
