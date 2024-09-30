
const accountDB = require('../configuration/AccountConfig/accounts')
const bcrypt = require('bcrypt');

const SignUp = (async (req, res) => {
    const { email, username, password } = req.body
    accountDB.findOne({email})
    .then((isEmail)=>{
        if(isEmail) return res.status(400).json({message: 'email alredy exist.'})
            bcrypt.hash(password, 10, async function (err, hash) {
                if (err) return res.status(400).json({ message: 'failed to create account' })
                const newUser = await accountDB.create({
                        email, username, password:hash
                })
                await newUser.save();
                res.status(200).json({message: 'new user created ' + newUser.username})
            });
    })
   
})

module.exports = SignUp;