const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: String,
        profilePic: String,
        bio: String,
        followers: [{type: Schema.Types.ObjectId, ref: "User"}],
        following: [{type: Schema.Types.ObjectId, ref: "User"}],
        // Stores the user's posts' ids in an array
        posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
    }
)
const User = mongoose.model('User', userSchema)

module.exports = User
