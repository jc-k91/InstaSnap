const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        author: String,
        image: String,
        caption: String,
        likedBy: []
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
