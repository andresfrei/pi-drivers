const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())

// Rutas
const router = require('./routes/index.router')
server.use('/api', router)

module.exports = server
