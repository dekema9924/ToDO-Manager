var jwt = require('jsonwebtoken');
require('dotenv').config()

const VerifyToken = (req, res, next) => {
    const token = req.cookies.jwt
    if (!token) return res.status(404).json({ message: 'unauthorized, jwt token required', isAuth: false })
    jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
        if(!decoded)  return res.status(400).json({ message: 'unauthorized, invalid token', isAuth: false  })
            req.user = decoded
            next()
    });
}

module.exports = VerifyToken;