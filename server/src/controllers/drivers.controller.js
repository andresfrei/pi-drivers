const { findDriversAPIService, findNationalitiesAPIService, findOneDriverFromAPI } = require('../services/api.service')
const { findAllDriversService, searchDriverService, createDriverService, findOneDriverService, deleteDriverService } = require('../services/drivers.service')
const { findAllTeamsService } = require('../services/team.service')

// Controlador para buscar todos los drivers
const getAllDrivers = async (req, res) => {
  try {
    const apiDrivers = await findDriversAPIService()
    const dbDrivers = await findAllDriversService()
    const drivers = [...apiDrivers, ...dbDrivers]

    let teams
    let nationalities

    // Si tiene full envio Teams y Nationalities
    const { full } = req.query
    if (full) {
      teams = await findAllTeamsService()
      nationalities = await findNationalitiesAPIService()
    }

    res.json({ drivers, teams, nationalities })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

// Controlador para buscar en Drivers
// Recibe una query como argumento
const searchDrivers = async (req, res) => {
  try {
    const { query } = req
    const apiDrivers = await findDriversAPIService({ query })
    const dbDrivers = await searchDriverService(query)
    const drivers = [...apiDrivers, ...dbDrivers]
    res.json(drivers)
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

const getDriverByID = async (req, res) => {
  try {
    const { id } = req.params

    // Segun el ID busco en DB o API
    const fnc = id.length > 5 ? findOneDriverService : findOneDriverFromAPI
    const res = await fnc(id)
    return res
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

const createDriver = async (req, res) => {
  try {
    const driver = await createDriverService(req.body)
    res.status(201).json(driver)
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params
    await deleteDriverService(id)
    res.status(200).json({ message: 'driver deleted' })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllDrivers, searchDrivers, createDriver, getDriverByID, deleteDriver }
