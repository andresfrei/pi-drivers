const express = require('express')
const router = express.Router()

const { createDriverMiddleware } = require('../middlewares/driver.middleware')
const { getAllDrivers, searchDrivrs, createDriver } = require('../controllers/drivers.controller')

router.get('/', getAllDrivers)
router.get('/search', searchDrivrs)
router.post('/', createDriverMiddleware, createDriver)
// router.get('/name', getDriversName)

// router.get('/:idDriver', getDriversId)

module.exports = router
