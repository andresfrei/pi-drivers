const { findProperiesForAPI } = require('../services/api.service')

const getAllTeams = async (req, res) => {
  try {
    const result = await findProperiesForAPI()
    console.log(result)
    const { teams } = result
    // const dbDrivers = await
    // const drivers = [...apiDrivers]
    res.json({ teams })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllTeams }
