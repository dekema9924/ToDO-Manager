const express = require('express')
const LoginRouter = require('express').Router();
const SignUp = require('../../controller/signup')

LoginRouter.use(express.json())
LoginRouter.use(express.urlencoded({extended: true}))




LoginRouter.post('/register', SignUp)


module.exports = LoginRouter