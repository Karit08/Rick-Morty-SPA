let myFavorites = require("../utils/favs");

const getFav = (req, res) =>{
    res.status(200).json(myFavorites);
};

const postFav = (req, res) =>{
    const {id} = req.body;
    const addedBefore = myFavorites.filter(character => character.id === id);
    if(addedBefore.length){
        return res.status(200).json({status: "Character added to favorites"});
    };
    myFavorites.push(req.body);
    res.status(200).json(myFavorites);
};

const deleteFav = (req, res) =>{
    const {id} = req.params;
    myFavorites = myFavorites.filter(character => character.id !== id);
    res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    getFav,
    deleteFav
};
