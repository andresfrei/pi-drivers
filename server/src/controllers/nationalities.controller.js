const { findNationalitiesAPIService } = require('../services/api.service')

// Controlador que devuelve todas las nationalities
const getAllNationalities = async (req, res) => {
  try {
    const nationalities = await findNationalitiesAPIService()
    res.json(nationalities)
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllNationalities }
