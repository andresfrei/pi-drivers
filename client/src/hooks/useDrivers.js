import { setDrivers as setDriversSlice } from '../reducers/drivers.slice'
import { useSelector, useDispatch } from 'react-redux'
import useLoader from './useLoader'
import useKey from './useKey'
import { findAllDataFromAPI } from '../services/drivers.service'

export default function useDrivers () {
  const drivers = useSelector(state => state.drivers)

  const [teams, setTeams] = useKey('teams')
  const [nationalities, setNationalities] = useKey('nationalities')

  const dispatch = useDispatch()
  const { handleService } = useLoader()

  const setDrivers = async () => {
    // const res = await handleService(findAllDriversService)
  }

  const loadData = async () => {
    const res = await handleService(findAllDataFromAPI)
    console.log(res)
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
