const accountDB = require('../configuration/AccountConfig/accounts')
const bcrypt = require('bcrypt');
const token = require('../Auth/token')




const Login = (async (req, res) => {
    const { email, password } = req.body
    let isEmail = await accountDB.findOne({ email })
    if (!isEmail) return res.status(400).json({ message: 'Invalid Email' })
    bcrypt.compare(password, isEmail.password, function (err, result) {
        try {
            if (!result) return res.status(400).json({ message: 'Invalid password' })
            const t = token(isEmail._id)
            res.cookie('jwt', t, {
                httpOnly: true,
                maxAge: 900000
            })
            res.status(200).json({message: 'Logging in...'})
        }
        catch (err) {
            console.log(err)
        }

    });

})

module.exports = Login