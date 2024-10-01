const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const accountRouter = require('./Router/accountRoute/accounts');
const { default: mongoose } = require('mongoose');
require('dotenv').config()


app.use('/accounts', accountRouter)


app.get('/',((req,res)=>{
    res.redirect('/accounts')
}))


app.listen(port, (()=>{
    console.log(`server open on port ${port}`)
    mongoose.connect(process.env.DB_URL)
    
}))