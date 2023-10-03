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

server.get('/', (req, res) => res.send('API DRIVERS 1.0'))

module.exports = server
