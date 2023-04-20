const user = require("../utils/users")

const login = (req, res) => {
    const {email, password } = req.query;
    if( email === user[0].email || password === user[0].password){
        res.status(200).json({access: true});
    }else{
        res.status(404).json({access: false});
    };
};

module.exports = login;
