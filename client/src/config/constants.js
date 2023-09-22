export const DEFAULT_LANGUAGE = 'es'

// Local storage keys
export const APP_KEY_LANGUAGE = 'APP_KEY_LANGUAGE'

// Keys del estadoglobal
export const KEY_LOADER = 'loader'
export const KEY_PAGE = 'page'
export const KEY_PAGINATION = 'pagination'
export const KEY_LIST_DRIVERS = 'listDrivers'

// Config API_URLS
const API_URL_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001/api'

export const API_URL_DRIVERS = API_URL_BASE + '/drivers'
export const API_URL_DRIVERS_SEARCH = API_URL_DRIVERS + '/search'
export const API_URL_TEAMS = API_URL_BASE + '/teams'
export const API_URL_NATIONALITIES = API_URL_BASE + '/nationalities'

// APP RUTES
export const APP_URL_LANDING = '/'
export const APP_URL_HOME = '/home'
export const APP_URL_DRIVER = '/driver'
export const APP_URL_CREATE = '/create'
export const APP_URL_ABOUT = '/about'

export const APP_VIDEO_BACKGRAUND_URL = 'https://youtu.be/YLFVD8xaD3U'
