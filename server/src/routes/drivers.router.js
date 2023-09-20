const express = require('express')
const router = express.Router()

const { getAllDrivers, searchDrivrs } = require('../controllers/drivers.controller')

router.get('/', getAllDrivers)
router.get('/search', searchDrivrs)
// router.get('/name', getDriversName)
// router.get('/:idDriver', getDriversId)
// router.post('/', postDrivers)

module.exports = router
