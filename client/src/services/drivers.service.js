import { API_URL_DRIVERS } from '../config/constants'

export const findAllDriversService = async () => {
  try {
    const res = await fetch(API_URL_DRIVERS)
    const data = await res.json()
    return { resolved: true, payload: data }
  } catch ({ message }) {
    return { resolved: false, payload: message }
  }
}

export const findAllDataFromAPI = async () => {
  try {
    const res = await fetch(`${API_URL_DRIVERS}?full=true`)
    const data = await res.json()
    return { resolved: true, payload: data }
  } catch ({ message }) {
    return { resolved: false, payload: message }
  }
}
