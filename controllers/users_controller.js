// ========== DEPENDENCIES ==========
// ------ BCRYPT ------
const bcrypt = require('bcrypt')

// ------ EXPRESS ------
const express = require('express')
const users = express.Router()

// ------ MODELS ------
const User = require('../models/user.js')

// ========== ROUTES ==========
// ------ CREATE ------
users.post('/', (req, res) => {
    req.body.username = req.body.username.toLowerCase()
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        res.json(createdUser)
    })
})

// ------ GET SINGLE USER ------
users.get('/:username', (req, res) => {
    User.find(
        { username: req.params.username },
        (err, foundUsers) => {
            res.json(foundUsers)
        }
    ).populate('posts')
})
// ------ SETTINGS ------ FOR LATER

// ------ DELETE ------ FOR LATER

module.exports = users
