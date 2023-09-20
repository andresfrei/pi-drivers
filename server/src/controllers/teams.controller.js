const { insetTeamsForAPIService, findAllTeamsService } = require('../services/team.service')

// Controlador que devuelve todos los dirvers
const getAllTeams = async (req, res) => {
  try {
    let teams = await findAllTeamsService()

    // Si no tengo Teams los importo
    if (!teams.length) teams = await insetTeamsForAPIService()

    res.json({ teams })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllTeams }
