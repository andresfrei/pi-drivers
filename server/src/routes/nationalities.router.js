const express = require('express')
const router = express.Router()

const { getAllNationalities } = require('../controllers/nationalities.controller')

router.get('/', getAllNationalities)

module.exports = router
