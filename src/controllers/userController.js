var User = require('../models/register')

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

    }
    catch (error) {

    }
} 