const express = require('express')
const router = express.Router()

const driversRouter = require('./drivers.router')
const teamsRouter = require('./teams.router')
const nationalitiesRouter = require('./nationalities.router')

router.use('/drivers', driversRouter)
router.use('/teams', teamsRouter)
router.use('/nationalities', nationalitiesRouter)

module.exports = router
