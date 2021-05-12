const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    profilePic: String,
    bio: String,
    followers: Array,
    following: Array,
    posts: {
        type: [Object],
        default: []
    }
})
const User = mongoose.model('User', userSchema)

module.exports = User
