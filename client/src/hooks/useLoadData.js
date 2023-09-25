import { KEY_HAS_LOAD, KEY_NATIONALITIES, KEY_TEAMS } from '../config/constants'
import { findAllDataFromAPI } from '../services/drivers.service'
import useDrivers from './useDrivers'
import useKey from './useKey'
import useLoader from './useLoader'

export default function useLoadData () {
  const [hasLoad, setHasLoad] = useKey(KEY_HAS_LOAD)
  const { loadDrivers } = useDrivers()
  const { handleService } = useLoader()

  const [teams, setTeams] = useKey(KEY_TEAMS)
  const [nationalities, setNationalities] = useKey(KEY_NATIONALITIES)

  const dataUpload = async () => {
    const res = await handleService(findAllDataFromAPI)
    if (res.resolved) {
      const { drivers, teams, nationalities } = res.payload
      loadDrivers(drivers)
      setTeams(teams)
      setNationalities(nationalities)
      setHasLoad(true)
    }
    return res
  }

  const clearState = () => {
    loadDrivers([])
    setTeams([])
    setNationalities([])
    setHasLoad(false)
  }

  return { hasLoad, dataUpload, teams, nationalities, clearState }
}
