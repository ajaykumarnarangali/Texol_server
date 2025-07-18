const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    expiresAt: {
        type: Date,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['employee', 'student']
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: tokenSchema,
        required: false
    },
    image: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('User', userSchema);