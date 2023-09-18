const express = require('express')
const router = express.Router()

const { getAllDrivers } = require('../controllers/drivers.controller')

router.get('/', getAllDrivers)
// router.get('/name', getDriversName)
// router.get('/:idDriver', getDriversId)
// router.post('/', postDrivers)

module.exports = router
