import { setDrivers as setDriversSlice } from '../reducers/drivers.slice'

import { useNavigate } from 'react-router-dom'
import { deleteDriverService } from '../services/drivers.service'
import useDrivers from './useDrivers'
import useLoader from './useLoader'
import { APP_URL_HOME } from '../config/constants'
import { useDispatch } from 'react-redux'

export default function useDriver (id) {
  const { drivers } = useDrivers()
  const { handleService } = useLoader()

  const dispatch = useDispatch()

  const navigate = useNavigate()
  // eslint-disable-next-line eqeqeq
  const driver = drivers.find(driver => driver.id == id)

  const handleDelete = async () => {
    const res = await handleService(deleteDriverService, id)
    if (res.resolved) {
      const newStateDrivers = drivers.filter(driver => driver.id !== id)
      dispatch(setDriversSlice(newStateDrivers))
      navigate(APP_URL_HOME)
    }
    return res
  }

  return { driver, handleDelete }
}
