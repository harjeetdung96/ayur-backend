const express = require('express');
const router = new express.Router();

const CustomerController = require('../controllers/customerController');

router.post('/insert-customer', CustomerController.insertCustomer)
router.post('/get-customer/:id?', CustomerController.getCustomers)

router.post('/delete-customer/:id', CustomerController.deleteCustomer)

router.post('/update-customer/:id', CustomerController.updateCustomer)

module.exports = router;