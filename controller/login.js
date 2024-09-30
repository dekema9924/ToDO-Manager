const accountDB = require('../configuration/AccountConfig/accounts')
const bcrypt = require('bcrypt');



const Login = (async(req,res)=>{
    const {email, password} = req.body
    let isEmail = await accountDB.findOne({email})
    if(!isEmail) return res.status(400).json({message: 'Invalid Email'})
        bcrypt.compare(password, isEmail.password, function(err, result) {
           try{
            if(!result) return res.status(400).json({message: 'Invalid password'})
                return res.status(200).json({message: 'Logging In...'})
           }
           catch(err){
            console.log(err)
           }

        });

})

module.exports = Login