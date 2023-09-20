const { findDriversAPIService } = require('../services/api.service')
const { findAllDriversService } = require('../services/drivers.service')

// Controlador para buscar todos los drivers
const getAllDrivers = async (req, res) => {
  try {
    // const apiDrivers = await findDriversAPIService()
    const dbDrivers = await findAllDriversService()
    // const drivers = [...apiDrivers, ...dbDrivers]
    res.json({ drivers: dbDrivers })
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
    // const dbDrivers = await
    // const drivers = [...apiDrivers]
    res.json({ drivers: apiDrivers })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllDrivers, searchDrivrs }
