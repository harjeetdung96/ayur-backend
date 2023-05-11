const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ayur', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection done');
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose;