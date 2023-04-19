const axios = require("axios");
const { URL} = process.env; 

//id, image, name, gender, species

const getCharById = (res, id) =>{ 
    // axios.get(`https://rickandmortyapi.com/api/character/${id}` )
    axios.get(`${URL}/${id}` )
    .then( (response) =>{
        const {id, name, gender, species, origin, image, status} =  response.data;
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}));
        // res.end(JSON.stringify({id, image, name, gender, species})); // id
    })
    .catch(error =>{
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end(error.message);
    })
};

module.exports = getCharById;