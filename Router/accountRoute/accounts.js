const express = require('express')
const accountRoute = require('express').Router();
const SignUp = require('../../controller/signup')
const Dashboard = require('../../controller/dashboard')
const Login = require('../../controller/login')
const DashboardAuth = require('../../Auth/DashboardAuth')
var cookieParser = require('cookie-parser')




accountRoute.use(express.json())
accountRoute.use(express.urlencoded({extended: true}))
accountRoute.use(cookieParser())


accountRoute.post('/register', SignUp)
accountRoute.post('/login',Login)
accountRoute.get('/dashboard', DashboardAuth, Dashboard)






module.exports = accountRoute