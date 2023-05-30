const express = require('express')
const auth = new express.Router();
const userController = require('../controllers/userController')
const verifyToken = require('../middlewares/verifyToekn')

auth.post('/register', userController.register)

auth.post('/login', userController.login);

auth.post('/profile', userController.profile);

module.exports = auth;