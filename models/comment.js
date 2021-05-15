const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        commenter: String,
        // React doesn't like the key commenterId
        commenter_id: String,
        comment: String,
        post: String
    }
)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
