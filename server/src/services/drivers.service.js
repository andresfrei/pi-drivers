const { Driver, Team } = require('../db')

// Funcion para buscar todos los drivers del modelo
const findAllDriversService = async () => {
  const drivers = await Driver.findAll()
  return drivers
}

// Funcion para buscar drivers en el modelo
const findDriversService = async ({ query }) => {
  const drivers = await Driver.findAll({ where: query }, { include: [Team] })
  return drivers.toJSON()
}

// Funcion para buscar un Drive en el modelo
const findOneDriverService = async (idDriver) => {
  const driver = await Driver.findByPk(idDriver, { include: [Team] })
  if (!driver) return {}
  return driver.toJSON()
}

module.exports = { findDriversService, findOneDriverService, findAllDriversService }
