const { findDriversAPIService } = require('../services/api.service')

const getAllDrivers = async (req, res) => {
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

module.exports = { getAllDrivers }
