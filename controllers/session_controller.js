// BCRYPT
const bcrypt = require('bcrypt')

// EXPRESS
const express = require('express')
const sessions = express.Router()

// MODELS
const User = require('../models/user.js')

// ROUTES
// NEW SESSION
sessions.post('/login', (req, res) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, foundUser) => {
            if (err) {
                console.log(err)
            } else if ( !foundUser ) {
                res.send("username not found. or is it?")
            } else {
                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    console.log('USER SESSION CREATED FOR ' + req.body.username + " =============================")
                    req.session.currentUser = foundUser
                    res.json(req.session.currentUser)
                } else {
                    res.send("incorrect password. or is it?")
                }
            }
        }
    )
})

// DELETE SESSION ======== NEED TO SET STATE -> CURRENTUSER = {}
sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.json({})
    })
})

module.exports = sessions
