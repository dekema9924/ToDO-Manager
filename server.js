const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const LoginRouter = require('./Router/LoginRoute/Login');
const { default: mongoose } = require('mongoose');


app.use('/loginroute', LoginRouter)


app.get('/',((req,res)=>{
    res.redirect('/loginroute')
}))


app.listen(port, (()=>{
    console.log(`server open on port ${port}`)
    mongoose.connect('mongodb://localhost:27017/todoaccounts')
    
}))