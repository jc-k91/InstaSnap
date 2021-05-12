const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    author: String,
    image: String,
    caption: String,
    dateCreated: {
        type: Date,
        default: Date(Date.now)
    },
    likedBy: []
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
