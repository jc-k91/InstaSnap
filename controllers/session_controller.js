// ========== DEPENDENCIES ==========
// ------ BCRYPT ------
const bcrypt = require('bcrypt')

// ------ EXPRESS ------
const express = require('express')
const sessions = express.Router()

// ------ MODELS ------
const User = require('../models/user.js')

// ========== ROUTES ==========
// ------ CREATE SESSION (LOGIN) ------
sessions.post('/login', (req, res) => {
    User.findOne(
        { username: req.body.username.toLowerCase() },
        (err, foundUser) => {
            // IF ERROR
            if (err) {
                console.log(err)
            // IF USERNAME IS NOT FOUND
            } else if ( !foundUser ) {
                res.json("Invalid")
            // IF USERNAME IS FOUND
            } else {
                // IF THE PASSWORD IS CORRECT
                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    console.log('==================== ' + req.body.username +  ' LOGGED IN ====================')
                    req.session.currentUser = foundUser

                    // It turns out sending the req.session object to the client makes your app more vulnerable to exploits
                    res.json(req.session)
                // IF THE PASSWORD IS INCORRECT
                } else {
                    res.json("Invalid")
                }
            }
        }
    ).populate('posts')
})

// ------ VALIDATE SESSION ------
sessions.get('/validate', (req, res) => {
    res.json(req.session)
})

// ------ DELETE SESSION (LOGOUT) ------
sessions.delete('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
        }
        console.log('==================== SESSION DESTROYED ====================')
        res.json(req.session)
    })
})

module.exports = sessions
