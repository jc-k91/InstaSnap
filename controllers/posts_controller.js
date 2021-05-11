// EXPRESS ==========
const express = require('express')
const posts = express.Router()

// SCHEMA ==========
const Post = require('../models/post.js')

// ROUTES ==========
// INDEX
posts.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.json(allPosts)
    })
})

// CREATE
posts.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        Post.find({}, (error, allPosts) => {
            res.json(allPosts)
        })
    })
})

// UPDATE
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

// DELETE
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
