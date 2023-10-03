import { useNavigate } from 'react-router-dom'
import { deleteDriverService } from '../services/drivers.service'
import useDrivers from './useDrivers'
import useLoader from './useLoader'
import { APP_URL_HOME } from '../config/constants'

export default function useDriver (id) {
  const { drivers, setDrivers } = useDrivers()
  const { handleService } = useLoader()

  const navigate = useNavigate()
  // eslint-disable-next-line eqeqeq
  const driver = drivers.find(driver => driver.id == id)

  const handleDelete = async () => {
    const res = await handleService(deleteDriverService, id)
    if (res.resolved) {
      setDrivers(driver.filter(driver => driver.id !== id))
      navigate(APP_URL_HOME)
    }
    return res
  }

  return { driver, handleDelete }
}
