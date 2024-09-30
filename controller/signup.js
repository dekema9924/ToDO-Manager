
const accountDB = require('../configuration/AccountConfig/accounts')

const SignUp = (async(req, res)=>{
    const {email, username, password} = req.body
    const newUser = await accountDB.create({
        email, username, password
    })

    await newUser.save();
    res.status(200).json({message: 'new user created ' + newUser.username})


    


})

module.exports = SignUp;