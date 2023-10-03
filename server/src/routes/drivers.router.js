const express = require('express')
const router = express.Router()

const { createDriverMiddleware } = require('../middlewares/driver.middleware')
const { getAllDrivers, searchDrivers, createDriver, getDriversId } = require('../controllers/drivers.controller')

router.get('/', getAllDrivers)
router.get('/search', searchDrivers)
router.get('/:idDriver', getDriversId)

router.post('/', createDriverMiddleware, createDriver)

// router.get('/name', getDriversName)

module.exports = router
