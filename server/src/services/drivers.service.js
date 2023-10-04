const { Op, literal } = require('sequelize')
const { Driver, Team } = require('../db')

// Funcion para crear un driver
const createDriverService = async (data) => {
  const { teams, ...restOfData } = data
  const driver = await Driver.create(restOfData)
  driver.addTeams(teams)
  return driver
}

// Funcion para buscar todos los drivers del modelo
const findAllDriversService = async () => {
  const drivers = await Driver.findAll({
    include: {
      model: Team,
      attributes: ['name']
    }
  }
  )
  return drivers.map(driver => formattedDrivers(driver))
}

// Funcion para buscar drivers en el modelo
const searchDriverService = async (query) => {
  const keys = Object.keys(query)

  if (keys[0] === 'name') return await searchByName(query.name.toLowerCase())
  if (keys[0] === 'team') return await searchByTeam(query.team)
  if (keys[0] === 'nationality') return await searchByNationality(query.nationality)

  throw new Error('Query no válida')
}

const searchByName = async (name) => {
  const drivers = await Driver.findAll({
    where: {
      [Op.or]: [
        literal(`LOWER(firstname) LIKE '%${name}%'`),
        literal(`LOWER(lastname) LIKE '%${name}%'`)
      ]
    },
    include: {
      model: Team,
      attributes: ['name']
    }
  })
  return drivers.map(driver => formattedDrivers(driver))
}

const searchByTeam = async (name) => {
  const drivers = await Driver.findAll({
    include: {
      model: Team,
      attributes: ['name'],
      where: { name }
    }
  })
  return drivers.map(driver => formattedDrivers(driver))
}

const searchByNationality = async (nationality) => {
  const drivers = await Driver.findAll({
    where: { nationality },
    include: {
      model: Team,
      attributes: ['name']
    }
  })

  return drivers.map(driver => formattedDrivers(driver))
}

// Funcion para buscar un Drive en el modelo
const findOneDriverService = async (idDriver) => {
  const driver = await Driver.findByPk(idDriver, { include: [Team] })
  if (!driver) return {}
  return formattedDrivers(driver)
}

const deleteDriverService = async (id) => {
  const driver = await Driver.destroy({ where: { id } })
  return !!driver
}

const formattedDrivers = (driver) => {
  const teamNames = driver.Teams.map(team => team.name)
  return {
    id: driver.id,
    firstname: driver.firstname,
    lastname: driver.lastname,
    description: driver.description,
    image: driver.image,
    nationality: driver.nationality,
    birth: driver.birth,
    wiki: driver.wiki,
    teams: teamNames
  }
}

module.exports = {
  searchDriverService,
  findOneDriverService,
  findAllDriversService,
  createDriverService,
  deleteDriverService
}
