const { findAllTeamsService } = require('../services/team.service')

// Controlador que devuelve todos los dirvers
const getAllTeams = async (req, res) => {
  try {
    const teams = await findAllTeamsService()

    res.json({ teams })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllTeams }
