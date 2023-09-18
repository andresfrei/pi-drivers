const axios = require('axios')
const { API_URL_DRIVERS } = require('../config/constants')

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

    // Si la busqueda es por nombre vuelvo a filtrar
    if (query && query?.name) data = filterToName(data, query.name.toLowerCase())

    return data
  } catch ({ message }) {
    return { message }
  }
}

const filterToName = (data, name) => {
  return data.filter(item =>
    item.name.forename.toLowerCase().includes(name) ||
    item.name.surname.toLowerCase().includes(name)
  )
}

const findProperiesForAPI = async () => {
  const setTeams = new Set()
  const setNationality = new Set()

  const drivers = await findDriversAPIService()
  drivers.forEach(driver => {
    const { teams } = driver
    if (teams) {
      const arrayTeams = teams.split(',')
      arrayTeams.forEach(team => setTeams.add(team.trim()))
    }
    setNationality.add(driver.nationality.trim())
  })
  const teams = Array.from(setTeams).sort()
  const nationality = Array.from(setNationality).sort()
  return { teams, nationality }
}

module.exports = { findDriversAPIService, findProperiesForAPI }
