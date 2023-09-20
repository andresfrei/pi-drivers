const { Op, literal } = require('sequelize')
const { Driver, Team, Nationality } = require('../db')

// Funcion para buscar todos los drivers del modelo
const findAllDriversService = async () => {
  const drivers = await Driver.findAll()
  return drivers
}

// Funcion para buscar drivers en el modelo
const searchDriverService = async (query) => {
  const keys = Object.keys(query)

  if (keys[0] === 'name') return await searchByName(query.name)
  if (keys[0] === 'team') return await searchByTeam(query.team)
  if (keys[0] === 'nationality') return await searchByNationality(query.nationality)

  throw new Error('Query no válida')
}

const searchByName = async (name) => {
  const drivers = await Driver.findAll({
    where: {
      [Op.or]: [
        literal(`nombre LIKE '%${name}%'`),
        literal(`apellido LIKE '%${name}%'`)
      ]
    },
    include: {
      model: Team,
      where: { name },
      as: 'teams'
    }
  })

  return drivers
}

const searchByTeam = async (name) => {
  const drivers = await Driver.findAll({
    include: {
      model: Team,
      attributes: ['name'],
      where: { name },
      as: 'teams'
    }
  })

  return drivers
}

const searchByNationality = async (name) => {
  const drivers = await Driver.findAll({
    include: [
      Team,
      { model: Nationality, where: { name } }
    ]
  })

  return drivers
}

// Funcion para buscar un Drive en el modelo
const findOneDriverService = async (idDriver) => {
  const driver = await Driver.findByPk(idDriver, { include: [Team] })
  if (!driver) return {}
  return driver.toJSON()
}

module.exports = { searchDriverService, findOneDriverService, findAllDriversService }
