const jwt = require('jsonwebtoken');
var User = require('../models/user');
const { json } = require('express');
var matchPassword = new User();


module.exports.register = async (req, res) => {

    try {
        const userData = new User(req.body);
        const result = await userData.save();
        res.send(result);
    } catch (error) {
        res.send(error);
    }

}

module.exports.login = async (req, res) => {
    try {
        await User.findOne({ email: req.body.email })
            .then((result) => {
                return matchPassword.comparePassword(req.body.password, result.password)
                    .then((check) => {
                        if (check == 1) {
                            jwt.sign({ email: result.email, id: result._id, name: result.name }, "SECRET_KEY", { expiresIn: '300s' }, (err, token) => {
                                res.send(200, { response: { message: 'success', name: result.name, type: result.role, logged_in: 1, token: token } })
                            })
                        }
                        else {
                            res.send(402, { response: { message: 'wrong credentials' } })
                        }
                    })
            })
            .catch((error) => {
                res.send(402, { response: error })
            })
    }
    catch (error) {
        res.send(402, { response: error })
    }
}

module.exports.profile = (req, res) => {

    jwt.verify(req.token, 'SECRET_KEY', (err, authData) => {
        if (err) {
            res.send({ result: "invalid token" })
        }
        else {
            res.send({ authData })
        }

    }
    )
}