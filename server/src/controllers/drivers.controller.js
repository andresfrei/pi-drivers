const { findDriversAPIService } = require('../services/api.service')
const { findAllDriversService, searchDriverService } = require('../services/drivers.service')

// Controlador para buscar todos los drivers
const getAllDrivers = async (req, res) => {
  try {
    const apiDrivers = await findDriversAPIService()
    const dbDrivers = await findAllDriversService()
    const drivers = [...apiDrivers, ...dbDrivers]
    res.json({ drivers })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

// Controlador para buscar en Drivers
// Recibe una query como argumento
const searchDrivrs = async (req, res) => {
  try {
    const { query } = req
    const apiDrivers = await findDriversAPIService({ query })
    const dbDrivers = await searchDriverService(query)
    const drivers = [...apiDrivers, ...dbDrivers]
    res.json({ drivers })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

const createDriver = (req, res) => {

}

module.exports = { getAllDrivers, searchDrivrs, createDriver }
