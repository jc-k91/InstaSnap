const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: String,
    followers: Array,
    following: Array,
    posts: { type: [Object], default: [] }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
