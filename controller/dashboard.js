const accountDB = require('../configuration/AccountConfig/accounts')





const Dashboard = (async(req, res) => {
  let user = req.user
   await accountDB.findById(user.id).select('-password')
   .then((foundUser)=>{
        if(!foundUser)  return res.status(400).json({message: 'Invalid User', isAuth: false})
            res.status(200).json({message: 'authenticated', isAuth: true , foundUser })
   })
})  

module.exports = Dashboard