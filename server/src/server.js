const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())

// Rutas
const router = require('./routes/index.router')
server.use('/api', router)

module.exports = server
