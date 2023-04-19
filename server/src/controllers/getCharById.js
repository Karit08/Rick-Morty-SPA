const { URL} = process.env;
const axios = require("axios");

const getCharById = (req, res) =>{
    const { id } = req.params;

    axios.get(`${URL}/${id}`)
    .then(response => {
        const {id, status, name, species, origin, image, gender} = response.data
        if(id){
            res.status(200).json({id, status, name, species, origin, image, gender});
        } else{
            res.status(404).json({error : "Not found"});
        }
    }).catch(e => {
        res.status(500).json({error: e.message});
    });

};

module.exports = getCharById;