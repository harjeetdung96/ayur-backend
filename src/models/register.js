const { mongoose } = require('../db/conn');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: 'Phone is required',
    },
});

UserSchema.pre("save", function (next) {
    const user = this

    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError)
                    }
                    user.password = hash
                    next()
                })
            }
        })
    } else {
        return next()
    }
})



UserSchema.methods.comparePassword = async function (password, db_password) {

    const match = await bcrypt.compare(password, db_password);
    if (match) {
        return 'Logged In';
    }
    else {
        return 'Wron Credentials';
    }
}

module.exports = mongoose.model("User", UserSchema)