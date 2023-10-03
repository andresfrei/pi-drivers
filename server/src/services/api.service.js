const axios = require('axios')
const { API_URL_DRIVERS } = require('../config/constants')

const findOneDriverFromAPI = async (id) => {
  const driver = await axios.get(`${API_URL_DRIVERS}/${id}`)
}

// Funcion para buscar Drivers en la API
const findDriversAPIService = async (params) => {
  let data
  let filter
  const query = params?.query

  // Si busco por nombre filtro con q para minimizar la busqueda
  if (query?.name) filter = `?q=${query.name}`
  // o Filtro por Teams
  if (query?.team) filter = `?teams=${query.team}`
  // o Filtro por Nacionalidad
  if (query?.nationality) filter = `?nationality=${query.nationality}`

  // Conslto la API
  const url = API_URL_DRIVERS + (filter || '')
  const response = await axios.get(url)
  data = response.data

  // Si la busqueda es por nombre vuelvo a filtrar
  if (query && query?.name) data = filterToName(data, query.name.toLowerCase())

  return formattedDrivers(data)
}

// Funcion para dar formato a los drivers
const formattedDrivers = (drivers) => {
  const result = drivers.map(driver => {
    let { teams } = driver
    if (teams) teams = teamsToArray(teams)
    return {
      id: driver.id,
      firstname: driver.name.forename,
      lastname: driver.name.surname,
      description: driver.description,
      image: driver.image.url,
      nationality: driver.nationality,
      birth: new Date(driver.dob), // formato fecha
      wiki: driver.url,
      teams
    }
  })
  return result
}

// Funcion para filtrar por nombre o apellido
const filterToName = (data, name) => {
  return data.filter(item =>
    item.name.forename.toLowerCase().includes(name) ||
    item.name.surname.toLowerCase().includes(name)
  )
}

// Funcion para leer los Teams y nationality de la API
const findTeamsAPIService = async () => {
  const setTeams = new Set()

  // Busco todos los drivers
  const drivers = await findDriversAPIService()

  drivers.forEach(driver => {
    const { teams } = driver
    if (teams) teams.map(team => setTeams.add(team))
  })

  // Ordeno y devuelvo
  return Array.from(setTeams).sort()
}

// Funcion para buscar todas las nacionalidades
const findNationalitiesAPIService = async () => {
  const nationalities = new Set()
  const drivers = await findDriversAPIService()
  drivers.forEach(driver => {
    nationalities.add(driver.nationality.trim())
  })
  return Array.from(nationalities).sort()
}

// Funcion para convertir los teams a un array
const teamsToArray = (teams) => teams.split(',').map(team => team.trim())

module.exports = {
  findDriversAPIService,
  findTeamsAPIService,
  findNationalitiesAPIService,
  findOneDriverFromAPI
}
