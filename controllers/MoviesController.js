const express = require('express')
const router = express.Router()

const movieService = require("../services/MoviesService.js");


router.get("/",movieService.getMovies);
router.get("/:id",movieService.getAMovie);
router.post("/",movieService.createMovie);
router.put("/:id",movieService.updateAMoive);
router.delete("/:id",movieService.deleteAMovie);

module.exports = router