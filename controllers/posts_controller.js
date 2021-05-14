// ========== DEPENDENCIES ==========
// ------ EXPRESS ------
const express = require('express')
const posts = express.Router()

// ------ SCHEMA ------
const Post = require('../models/post.js')
const User = require('../models/user.js')

// ========== ROUTES ==========
// ------ ALL POSTS ------
posts.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.json(allPosts)
    })
})

// ------ CREATE POST ------
posts.post('/', (req, res) => {
    User.findById(req.session.currentUser._id, (err1, foundUser) => {
        Post.create(req.body, (err2, createdPost) => {
            foundUser.posts.unshift(createdPost)
            foundUser.save()
            console.log(foundUser.posts);
            User.find({}, (err3, allUsers) => {
                res.json(allUsers)
            })
        })
    })
})

// ------ UPDATE POST ------
// Why don't we just query the user db as above in create post route, THEN find the post by it's id and

posts.put('/:id', (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
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
                    Post.findById(req.params.id, (error, foundPost) => {
                        res.json(foundPost)
                    })
                }
            }
        )
    })
})

// posts.put('/:id', (req, res) => {
//     Post.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//             new: true
//         },
//         (err, updatedPost) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 Post.find({}, (error, allPosts) => {
//                     res.json(allPosts)
//                 })
//             }
//         }
//     )
// })

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
