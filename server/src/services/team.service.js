const { Team } = require('../db')
const { findProperiesForAPI } = require('./api.service')

// Funcion para importar los teams de la API
const insetTeamsForAPIService = async () => {
  const { teams } = await findProperiesForAPI()
  const newTeams = await Team.bulkCreate(teams)
  return newTeams
}

// Función para buscar todos los teams
const findAllTeamsService = async () => {
  const teams = await Team.findAll()
  return teams
}

module.exports = { insetTeamsForAPIService, findAllTeamsService }
