const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  author: String,
  image: { type: String, required:true },
  caption: String,
  dateCreated: { type: Date, default: Date(Date.now) },
  likedBy: [String],
  comments: [String]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
