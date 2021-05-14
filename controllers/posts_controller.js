/* DOCUMENT NOTES! */
/* This post controller exists to direct all routes that create data in the back end. Whenever you visit one of these routes, it affects or interacts with the database in some way. */

// ========== DEPENDENCIES ==========
// ------ EXPRESS ------
const express = require('express')
const posts = express.Router()

// ------ SCHEMA ------
const Post = require('../models/post.js')
const User = require('../models/user.js')

// ========== ROUTES ==========
// ------ ALL POSTS ------
/* This route provides access to all of the posts in our database's posts collection. It returns all found data in JSON format. */
posts.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.json(allPosts)
    })
})

// ------ CREATE POST ------
/* When the user wants to create a post, the router first queries the users collection, and finds the user by searching the req.session.currentUser's auto-generated _id. Req.session.currentUser represents the currently logged in user. */
/* Once the user has been found by the logged in users's id, create a piece of data in our posts collection, which will consist of the req.body. */
posts.post('/', (req, res) => {
    User.findById(req.session.currentUser._id, (err1, foundUser) => {
        Post.create(req.body, (err2, createdPost) => {
            // Send the created post to the front of the found user's posts array!
            foundUser.posts.unshift(createdPost)
            // ???????
            foundUser.save()
            console.log(foundUser.posts);
            // Finally, find all the users (but really it's just the one user since this query is nested inside a findById call) 
            User.find({}, (err3, allUsers) => {
                res.json(allUsers)
            })
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
