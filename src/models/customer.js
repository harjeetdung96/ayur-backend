const { mongoose } = require('../db/conn');
const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    phone: {
        type: Number,
        required: 'Phone is required',
    },
    appointment_datetime: {
        type: Date,
        required: 'Appointment datetime is required',
    }
});

const Customer = new mongoose.model('Customers', schema);

module.exports = Customer;