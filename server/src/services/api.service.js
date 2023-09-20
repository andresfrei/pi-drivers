const axios = require('axios')
const { API_URL_DRIVERS } = require('../config/constants')

// Funcion para buscar Drivers en la API
const findDriversAPIService = async (params) => {
  let data
  let filter
  const query = params?.query

  try {
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

    // Si la busqueda es por nombre vuelvnpm o a filtrar
    if (query && query?.name) data = filterToName(data, query.name.toLowerCase())

    // Formateo según modelo para compatibilidad
    const formatDrivers = data.map(driver => {
      const teams = !driver.teams
        ? []
        : driver.teams.split(',').map(team => { return { name: team.trim() } })
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

    return formatDrivers
  } catch ({ message }) {
    return { message }
  }
}

// Funcion para filtrar por nombre o apellido
const filterToName = (data, name) => {
  return data.filter(item =>
    item.name.forename.toLowerCase().includes(name) ||
    item.name.surname.toLowerCase().includes(name)
  )
}

// Funcion para leer los Teams y nationality de la API
const findProperiesForAPI = async () => {
  const setTeams = new Set()
  const setNatiolalities = new Set()

  // Busco todos los drivers
  const drivers = await findDriversAPIService()
  drivers.forEach(driver => {
    const { teams } = driver
    if (teams) {
      const arrayTeams = teams.split(',')
      arrayTeams.forEach(team => setTeams.add(team.trim()))
    }
    setNatiolalities.add(driver.nationality.trim())
  })
  // Ordeno y transformo en objeto
  let teams = Array.from(setTeams).sort()
  teams = teams.map(name => { return { name } })

  // Ordeno y transformo en objeto
  const nationalities = Array.from(setNatiolalities).sort()

  return { teams, nationalities }
}

module.exports = { findDriversAPIService, findProperiesForAPI }
