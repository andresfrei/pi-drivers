import { setDrivers as setDriversSlice } from '../reducers/drivers.slice'
import { useSelector, useDispatch } from 'react-redux'

import useLoader from './useLoader'
import useKey from './useKey'

import { createDriverService, findAllDrivers, findDriversByName, findDriversByNationality, findDriversByTeam } from '../services/drivers.service'
import { filterByName, filterByNationality, filterByTeam } from '../libs/filters'

import { FILED_NAME, FILED_NATIONALITY, FILED_TEAM, KEY_PAGINATION_CURRENT_PAGE, KEY_SEARCH_FIELD, KEY_SEARCH_HAS_FILTER, KEY_SEARCH_VALUE } from '../config/constants'

export default function useDrivers () {
  const drivers = useSelector(state => state.drivers)
  const [currentPage, setCurrentPage] = useKey(KEY_PAGINATION_CURRENT_PAGE)

  const [hasFilter] = useKey(KEY_SEARCH_HAS_FILTER)
  const [seatchField] = useKey(KEY_SEARCH_FIELD)
  const [searchValue] = useKey(KEY_SEARCH_VALUE)

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

  const filterDrivers = () => {
    if (!hasFilter) return drivers

    const value = searchValue.toLowerCase()
    if (seatchField === FILED_NAME) return filterByName(drivers, value)
    if (seatchField === FILED_NATIONALITY) return filterByNationality(drivers, value)
    if (seatchField === FILED_TEAM) return filterByTeam(drivers, value)
  }

  const showDrivers = filterDrivers()

  const createDriver = async (data) => {
    const res = await handleService(createDriverService, data)

    // Si Salio bien agrego al estado
    if (res.resolved) dispatch(setDriversSlice([...drivers, res.payload]))

    return res
  }

  return { drivers, setDrivers, loadDrivers, showDrivers, createDriver }
}
