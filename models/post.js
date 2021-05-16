const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        author: String,
        // React doesn't like the key authorId
        author_id: String,
        image: String,
        caption: String,
        likedBy: [{type: Schema.Types.ObjectId, ref: "User"}],
        // Stores the post's comments' ids in an array
        comments:[{type: Schema.Types.ObjectId, ref: "Comment"}]
    }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
