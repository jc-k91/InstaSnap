// DOTENV =============
require('dotenv').config()


// EXPRESS =============
const express = require('express')
const app = express()
const PORT = process.env.PORT


// DATABASE =============
const mongoose = require('mongoose');
const db = mongoose.connection
const MONGODB_URI = process.env.PROJECT3DB_URI


// CONTROLLERS =============
const postsController = require('./controllers/posts_controller.js')
// const sessionController = require('./controllers/session_controller.js')
const usersController = require('./controllers/users_controller.js')


// MIDDLEWARE  =============
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/posts', postsController)
// app.use('/session', sessionController)
app.use('/users', usersController)


// CONNECTIONS  =============
app.listen(PORT, () => {
    console.log(`InstaSnap listening for connections at port ${PORT}...`)
})

mongoose.connect(
    MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)


// DATABASE CONNECTION MESSAGES ==========
db.on('error', (err) => {
    console.log(
        err.message + ". Does mongod have to be running? Is your Atlas connection string correct?"
    )
})
db.on('connected', () => {
    console.log('MongoDB connected: ' + MONGODB_URI)
})
db.on('disconnected', () => {
    console.log('MongoDB was disconnected')
})
