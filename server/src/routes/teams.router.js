const express = require('express')
const router = express.Router()

const { getAllTeams } = require('../controllers/teams.controller')

router.get('/', getAllTeams)
// router.get('/name', getDriversName)
// router.get('/:idDriver', getDriversId)
// router.post('/', postDrivers)

module.exports = router
