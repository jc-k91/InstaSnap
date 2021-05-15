// ========== DEPENDENCIES ==========
// ------ EXPRESS ------
const express = require('express')
const posts = express.Router()

// ------ SCHEMA ------
const User = require('../models/user.js')
const Post = require('../models/post.js')
const Comment = require('../models/comment.js')

// ========== ROUTES ==========
// ------ ALL POSTS ------
posts.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.json(allPosts)
    })
})

// ------ FIND POST ------
posts.get('/:postId', (req, res) => {
    Post.findById(req.params.postId, (err, foundPost) => {
        res.json(foundPost)
    })
})

// ------ CREATE POST ------
posts.post('/', (req, res) => {
    Post.create(req.body, (err1, createdPost) => {
        User.findById(req.session.currentUser._id, (err2, foundUser) => {
            console.log('added post');
            foundUser.posts.unshift(createdPost)
            foundUser.save()
            res.json(foundUser)
        }).populate('posts')
    })
})

// ------ UPDATE POST ------

posts.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        },
        (err, updatedPost) => {
            if (err) {
                console.log(err)
            } else {
                Post.find({}, (error, allPosts) => {
                    res.json(allPosts)
                })
            }
        }
    )
})

// ------ DELETE POST ------
posts.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(
        req.params.id,
        (err, deletedPost) => {
            if (err) {
                console.log(err)
            } else {
                Post.find({}, (error, allPosts) => {
                    res.json(allPosts)
                })
            }
        }
    )
})

module.exports = posts
