require('dotenv').config()
const API_URL_BASE = process.env.API_URL_BASE || 'http://localhost:5000'
const API_URL_DRIVERS = API_URL_BASE + '/drivers'

module.exports = { API_URL_DRIVERS }
