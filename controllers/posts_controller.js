// ========== DEPENDENCIES ==========
// ------ EXPRESS ------
const express = require('express')
const posts = express.Router()

// ------ SCHEMA ------
const Post = require('../models/post.js')

// ========== ROUTES ==========
// ------ ALL POSTS ------
posts.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.json(allPosts)
    })
})

// ------ CREATE POST ------
posts.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        Post.find({}, (error, allPosts) => {
            res.json(allPosts)
        })
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
