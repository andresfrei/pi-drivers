const { importNacionalitiesService, findAllNationalitiesService } = require('../services/nationalities.service')

// Controlador que devuelve todas las nationalities
const getAllNationalities = async (req, res) => {
  try {
    let nationalities = await findAllNationalitiesService()

    // Si no tengo nationalities los importo
    if (!nationalities.length) nationalities = await importNacionalitiesService()

    res.json({ nationalities })
  } catch ({ message }) {
    res.status(400).json(message)
  }
}

module.exports = { getAllNationalities }
