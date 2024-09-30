const express = require('express')
const accountRoute = require('express').Router();
const SignUp = require('../../controller/signup')
const Login = require('../../controller/login')
accountRoute.use(express.json())
accountRoute.use(express.urlencoded({extended: true}))




accountRoute.post('/register', SignUp)
accountRoute.post('/login',Login)




module.exports = accountRoute