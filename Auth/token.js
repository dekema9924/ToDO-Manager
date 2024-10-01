var jwt = require('jsonwebtoken');
require('dotenv').config()


const Token = (id) => {
    var token = jwt.sign({ id: id }, process.env.SECRET_KEY);
    return token
}




module.exports =  Token
