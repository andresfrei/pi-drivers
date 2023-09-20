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
  let teams = await Team.findAll()

  // Si no tengo Teams los importo
  if (!teams.length) teams = await insetTeamsForAPIService()

  return teams
}

module.exports = { insetTeamsForAPIService, findAllTeamsService }
