const { Team } = require('../db')
const { findTeamsAPIService } = require('./api.service')

// Funcion para importar los teams de la API
const insetTeamsForAPIService = async () => {
  let teams = await findTeamsAPIService()
  console.log(teams)
  // Convierto en objeto con atributo name
  teams = teams.map(team => { return { name: team } })
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
