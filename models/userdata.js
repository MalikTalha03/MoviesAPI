const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
},
{ timestamps: true }
);

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        const salt = await bycrypt.genSalt(10);
        const hash = await bycrypt.hash(user.password, salt);
        user.password = hash;
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
