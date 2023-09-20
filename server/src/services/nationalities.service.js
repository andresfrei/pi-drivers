const { Nationality } = require('../db')
const { findProperiesForAPI } = require('./api.service')

// Funcion para importar los teams de la API
const importNacionalitiesService = async () => {
  const { nationalities } = await findProperiesForAPI()
  const newData = await Nationality.bulkCreate(nationalities)
  return newData
}

// Función para buscar todos los teams
const findAllNationalitiesService = async () => {
  const nationalities = await Nationality.findAll()
  return nationalities
}

module.exports = { importNacionalitiesService, findAllNationalitiesService }
