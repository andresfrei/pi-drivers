import { setDrivers as setDriversSlice } from '../reducers/drivers.slice'
import { useSelector, useDispatch } from 'react-redux'
import useLoader from './useLoader'
import useKey from './useKey'
import { findAllDataFromAPI, findAllDrivers, findDriversByName, findDriversByNationality, findDriversByTeam } from '../services/drivers.service'
import { FILED_NAME, FILED_NATIONALITY, FILED_TEAM, KEY_PAGE } from '../config/constants'

export default function useDrivers () {
  const drivers = useSelector(state => state.drivers)
  const [currentPage, setCurrentPage] = useKey(KEY_PAGE)

  const [teams, setTeams] = useKey('teams')
  const [nationalities, setNationalities] = useKey('nationalities')

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

  const loadData = async () => {
    const res = await handleService(findAllDataFromAPI)
    if (res.resolved) {
      const { drivers, teams, nationalities } = res.payload
      dispatch(setDriversSlice(drivers))
      setTeams(teams)
      setNationalities(nationalities)
    }
    return res
  }

  return { drivers, teams, nationalities, setDrivers, loadData }
}
