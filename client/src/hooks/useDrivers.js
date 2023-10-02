import { setDrivers as setDriversSlice } from '../reducers/drivers.slice'
import { useSelector, useDispatch } from 'react-redux'

import useLoader from './useLoader'
import useKey from './useKey'

import { createDriverService, findAllDrivers, findDriversByName, findDriversByNationality, findDriversByTeam } from '../services/drivers.service'
import { filterByName, filterByNationality, filterByTeam } from '../libs/filters'

import { APP_URL_HOME, FILED_NAME, FILED_NATIONALITY, FILED_TEAM, KEY_FILTER_ORIGIN, KEY_ORDER_ASC, KEY_ORDER_FIELD, KEY_PAGINATION_CURRENT_PAGE, KEY_SEARCH_FIELD, KEY_SEARCH_VALUE, KEY_TEAMS, ORIGIN_ALL, ORIGIN_API, ORIGIN_DB } from '../config/constants'
import { useNavigate } from 'react-router-dom'

export default function useDrivers () {
  const drivers = useSelector(state => state.drivers)
  const [currentPage, setCurrentPage] = useKey(KEY_PAGINATION_CURRENT_PAGE)

  const [seatchField] = useKey(KEY_SEARCH_FIELD)
  const [searchValue] = useKey(KEY_SEARCH_VALUE)

  const [filterOrigin] = useKey(KEY_FILTER_ORIGIN)

  const [orderField] = useKey(KEY_ORDER_FIELD)
  const [orderAsc] = useKey(KEY_ORDER_ASC)

  const [teamsState] = useKey(KEY_TEAMS)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { handleService } = useLoader()

  const setDrivers = async (field, value) => {
    let fnc
    if (!field) fnc = findAllDrivers
    if (field === FILED_NAME) fnc = findDriversByName
    if (field === FILED_TEAM) fnc = findDriversByTeam
    if (field === FILED_NATIONALITY) fnc = findDriversByNationality

    const res = await handleService(fnc, value)

    if (res.resolved) {
      dispatch(setDriversSlice(res.payload))
      currentPage !== 1 && setCurrentPage(1) // vuelvo a la pagina 1 del paginado
    }
    return res
  }

  const loadDrivers = (drivers) => dispatch(setDriversSlice(drivers))

  const orderDrivers = (data) => {
    const res = data.sort((a, b) => {
      let order = 0
      if (a[orderField] < b[orderField]) order = -1
      if (a[orderField] > b[orderField]) order = 1
      // Si es descendente intercambio las opciones
      return orderAsc === 'asc' ? order : order * -1
    })
    return res
  }

  const filterDrivers = () => {
    let listDrivers = []

    // Filtro por origen
    if (filterOrigin === ORIGIN_ALL) { listDrivers = drivers }
    if (filterOrigin === ORIGIN_API) listDrivers = drivers.filter(driver => driver.id.toString().length < 5)
    if (filterOrigin === ORIGIN_DB) listDrivers = drivers.filter(driver => driver.id.toString().length >= 5)

    // Filtro por busqueda
    const value = searchValue.toLowerCase()
    if (seatchField === FILED_NAME) listDrivers = filterByName(listDrivers, value)
    if (seatchField === FILED_NATIONALITY) listDrivers = filterByNationality(listDrivers, value)
    if (seatchField === FILED_TEAM) listDrivers = filterByTeam(listDrivers, value)

    return orderDrivers(listDrivers)
  }

  const showDrivers = filterDrivers()

  const createDriver = async (data) => {
    // Busco los ID de los Teams
    let { teams } = data
    teams = teams.map(name => {
      const o = teamsState.find(team => team.name === name)
      return o.id
    })

    // Formateo la fecha
    const date = data.birth.replace('-', '/')
    const [day, month, year] = date.split('/')
    const birth = `${year}-${month}-${day}`

    // Actualizo el nuevo objeto
    const newDriver = { ...data, teams, birth }
    console.log(newDriver)

    const res = await handleService(createDriverService, newDriver)
    // Si Salio bien agrego al estado
    if (res.resolved) {
      const newDriver = { ...res.payload, teams: data.teams }
      dispatch(setDriversSlice([...drivers, newDriver]))
      navigate(APP_URL_HOME)
    }
    return res
  }

  return { drivers, setDrivers, loadDrivers, showDrivers, createDriver }
}
