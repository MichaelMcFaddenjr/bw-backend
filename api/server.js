const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const restricted = require('./middleware/restricted')

const usersRouter = require('./users/users-router')
const itemsRouter = require('./items/items-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/items', restricted, itemsRouter) //only users with a token will have access 

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
})

module.exports = server