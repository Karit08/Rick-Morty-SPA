const getCharById = require ("../controllers/getCharById");
const login = require("../controllers/handleLogin");
const {postFav, getFav, deleteFav} = require("../controllers/handleFavorites");

const { Router } = require("express");

const router = Router();

router.get("/character/:id", getCharById);

// Login    **************************
router.get("/login", login);

// Favorito **************************
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;