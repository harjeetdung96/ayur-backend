const express = require('express')
const { mongoose } = require('../db/conn');

var User = require('../models/register')
const Customer = require('../models/customer')

var testy = new User();
const bcrypt = require('bcryptjs');

const auth = new express.Router();

auth.post('/register', async (req, res) => {

    try {
        const userData = new User(req.body);
        const result = await userData.save();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

// first way

// auth.post('/login', async (req, res) => {

//     try {
//         const data = await User.findOne({ name: req.body.name });

//         const match = await bcrypt.compare(req.body.password, data.password);
//         if (match) {
//             res.status(200).send({ status: 200, message: 'Logged In' })
//         }
//         else {
//             res.status(400).send({ status: 400, message: 'Wrong Credentials' })
//         }
//     }
//     catch (error) {
//         console.log(error)
//         res.status(400).send(error);

//     }

// })

// second way

auth.post('/login', async (req, res) => {

    try {
        const data = await User.findOne({ name: req.body.name });
        const result = await testy.comparePassword(req.body.password, data.password)
        res.send(200, { response: result });
    }
    catch (error) {
        res.send(400, { response: result });
    }

})

module.exports = auth;