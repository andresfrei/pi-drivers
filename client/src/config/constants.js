export const DEFAULT_LANGUAGE = 'es'

// Local storage keys
export const APP_KEY_LANGUAGE = 'APP_KEY_LANGUAGE'

// Keys del estado global
export const KEY_LOADER = 'loader'
export const KEY_HAS_LOAD = 'hasLoad'
export const KEY_ERROR = 'globalError'

// Cantidad de paginacion
export const KEY_PAGINATION_ITEMS = 'paginationItems'
export const KEY_PAGINATION_CURRENT_PAGE = 'paginationCurrentPage'
export const KEY_PAGINATION_MAX_PAGE = 'paginationMaxPage'
export const KEY_PAGINATION_CURRENT_DATA = 'paginationCurrentData'

// Estados de la API
export const KEY_TEAMS = 'teams'
export const KEY_NATIONALITIES = 'nationalities'

export const KEY_FILTER_ORIGIN = 'filterOrigin'

export const KEY_SEARCH_HAS_FILTER = 'seatchHasFilter'
export const KEY_SEARCH_FIELD = 'searchField'
export const KEY_SEARCH_VALUE = 'searchValue'

export const KEY_ORDER_FIELD = 'orderField'
export const KEY_ORDER_ASC = 'orderAsc'

// Config API_URLS
const API_URL_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Fields
export const FILED_NAME = 'name'
export const FILED_TEAM = 'team'
export const FILED_NATIONALITY = 'nationality'

export const ORIGIN_ALL = 'all'
export const ORIGIN_API = 'api'
export const ORIGIN_DB = 'db'

export const API_URL_DRIVERS = API_URL_BASE + '/drivers'
export const API_URL_DRIVERS_SEARCH = API_URL_DRIVERS + '/search'
export const API_URL_TEAMS = API_URL_BASE + '/teams'
export const API_URL_NATIONALITIES = API_URL_BASE + '/nationalities'

// APP RUTES
export const APP_URL_LANDING = '/'
export const APP_URL_ABOUT = '/about'
export const APP_URL_ERROR = '/error'

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

export const INICIAL_KEYS = {
  loader: true,
  hasLoad: false,
  paginationItems: 9,
  filterOrigin: 'all',
  paginationCurrentPage: 1,
  paginationCurrentData: [],
  paginationMaxPage: 0,
  searchField: FILED_NAME,
  searchValue: '',
  seatchHasFilter: false,
  orderField: 'id',
  orderAsc: 'asc'
}

export const DEV_AVATAR = 'https://media.licdn.com/dms/image/C4E03AQHUFU9CIwzXZg/profile-displayphoto-shrink_200_200/0/1610106662578?e=1701302400&v=beta&t=jCKkvXuc5Rx8g-zGKL5xFA1MIhyeHGQc6DJ4ZPGtokw'
export const DEV_GITHUB = 'https://github.com/andresfrei/pi-drivers'
export const DEV_LINKEDIN = 'https://www.linkedin.com/in/andresfrei'
