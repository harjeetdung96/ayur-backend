
const Customer = require('../models/customer')

module.exports.insertCustomer = async (req, res) => {

    try {
        console.log(req.body);
        const addingCustomer = new Customer(req.body);
        const result = await addingCustomer.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports.getCustomers = async (req, res) => {

    try {
        const _id = req.params.id;
        if (_id) {
            const getCustomer = await Customer.findById(_id);
            res.status(200).send(getCustomer);
        }
        else {
            const getCustomer = await Customer.find();
            res.status(200).send(getCustomer);
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}

module.exports.deleteCustomer = async (req, res) => {

    try {
        const _id = req.params.id;
        const deleteCustomer = await Customer.findByIdAndDelete(_id);
        res.status(200).send(deleteCustomer);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

module.exports.updateCustomer = async (req, res) => {

    try {
        const _id = req.params.id
        const updateCustomer = await Customer.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(updateCustomer);
    }
    catch (error) {
        res.status(400).send(error);
    }

}
