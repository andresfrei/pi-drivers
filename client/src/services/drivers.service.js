import fetchAPIService from './api.service'
import { API_URL_DRIVERS, API_URL_DRIVERS_SEARCH } from '../config/constants'

export const findAllDataFromAPI = async () => {
  return await fetchAPIService(`${API_URL_DRIVERS}?full=true`)
}

export const findAllDrivers = async () => {
  const res = await fetchAPIService(API_URL_DRIVERS)
  if (res.resolved) return { resolved: true, payload: res.payload.drivers }
  return res
}

export const findDriverByID = async (id) => {
  return await fetchAPIService(`${API_URL_DRIVERS}/{id}`)
}

export const findDriversByName = async (name) => {
  return await fetchAPIService(`${API_URL_DRIVERS_SEARCH}?name=${name}`)
}

export const findDriversByTeam = async (name) => {
  return await fetchAPIService(`${API_URL_DRIVERS_SEARCH}?team=${name}`)
}

export const findDriversByNationality = async (name) => {
  return await fetchAPIService(`${API_URL_DRIVERS_SEARCH}?nationality=${name}`)
}

export const createDriverService = async (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  return await fetchAPIService(API_URL_DRIVERS, options)
}

export const deleteDriverService = async (id) => {
  const options = {
    method: 'DELETE'
  }
  return await fetchAPIService(`${API_URL_DRIVERS}/${id}`, options)
}
