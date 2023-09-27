export const DEFAULT_LANGUAGE = 'es'

// Local storage keys
export const APP_KEY_LANGUAGE = 'APP_KEY_LANGUAGE'

// Keys del estado global
export const KEY_LOADER = 'loader'
export const KEY_HAS_LOAD = 'hasLoad'

// Cantidad de paginacion
export const KEY_PAGINATION_ITEMS = 'paginationItems'
export const KEY_PAGINATION_CURRENT_PAGE = 'paginationCurrentPage'
export const KEY_PAGINATION_CURRENT_DATA = 'paginationCurrentData'

// Estados de la API
export const KEY_TEAMS = 'teams'
export const KEY_NATIONALITIES = 'nationalities'

export const KEY_SEARCH_HAS_FILTER = 'seatchHasFilter'
export const KEY_SEARCH_FIELD = 'searchField'
export const KEY_SEARCH_VALUE = 'searchValue'

// Config API_URLS
const API_URL_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

//
export const FILED_NAME = 'name'
export const FILED_TEAM = 'team'
export const FILED_NATIONALITY = 'nationality'

export const API_URL_DRIVERS = API_URL_BASE + '/drivers'
export const API_URL_DRIVERS_SEARCH = API_URL_DRIVERS + '/search'
export const API_URL_TEAMS = API_URL_BASE + '/teams'
export const API_URL_NATIONALITIES = API_URL_BASE + '/nationalities'

// APP RUTES
export const APP_URL_LANDING = '/'
export const APP_URL_ABOUT = '/about'

export const APP_URL_HOME = '/home'
export const APP_URL_CREATE = APP_URL_HOME + '/create'

export const DRIVER_IMAGE_DEFAULT = 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ricardo_Rosset_at_1997_Australian_Grand_Prix.jpg'

// Inicial State
export const INICIAL_CREATED = {
  firstname: '',
  lastname: '',
  description: '',
  image: '',
  nationality: '',
  birth: '',
  wiki: '',
  teams: []
}
