const express = require('express')
const router = express.Router()

const driversRouter = require('./drivers.router')
const teamsRouter = require('./teams.router')

router.use('/drivers', driversRouter)
router.use('/teams', teamsRouter)

module.exports = router
