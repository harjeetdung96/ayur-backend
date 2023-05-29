const express = require('express')
const auth = new express.Router();
const userController = require('../controllers/userController')
const { authCheck } = require('../middlewares/authenticate_roles')

auth.post('/register', userController.register)

auth.post('/login', userController.login);

module.exports = auth;