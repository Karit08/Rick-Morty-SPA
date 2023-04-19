const getCharById = require ("../controllers/getCharById");
const login = require("../controllers/login");
const {postFav, getFav, deleteFav} = require("../controllers/handleFavorites");

const { Router } = require("express");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);

// se puede Mejorar 
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;