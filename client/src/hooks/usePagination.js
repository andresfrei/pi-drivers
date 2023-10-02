import useDrivers from './useDrivers'
import useKey from './useKey'
import { KEY_FILTER_ORIGIN, KEY_ORDER_ASC, KEY_ORDER_FIELD, KEY_PAGINATION_CURRENT_DATA, KEY_PAGINATION_CURRENT_PAGE, KEY_PAGINATION_ITEMS, KEY_SEARCH_HAS_FILTER } from '../config/constants'
import { useEffect } from 'react'

export default function usePagination () {
  const { showDrivers } = useDrivers()

  const [elementPerPage, setElementPerPage] = useKey(KEY_PAGINATION_ITEMS)
  const [currentPage, setCurrentPage] = useKey(KEY_PAGINATION_CURRENT_PAGE)
  const [currentData, setCurrentData] = useKey(KEY_PAGINATION_CURRENT_DATA)

  const [filterOrigin] = useKey(KEY_FILTER_ORIGIN)

  const [hasFilter] = useKey(KEY_SEARCH_HAS_FILTER)

  const [orderField] = useKey(KEY_ORDER_FIELD)
  const [orderAsc] = useKey(KEY_ORDER_ASC)

  const maxPage = !showDrivers ? 0 : Math.ceil(showDrivers.length / elementPerPage)

  const next = () => setCurrentPage(currentPage + 1)

  const prev = () => setCurrentPage(currentPage - 1)

  const jump = (page) => setCurrentPage(page)

  // Funcion que vuelve a renderizar si hay algún cambio
  useEffect(() => {
    const begin = (currentPage - 1) * elementPerPage
    const end = begin + elementPerPage
    setCurrentData(showDrivers.slice(begin, end))
  },
  [
    elementPerPage,
    currentPage,
    filterOrigin,
    hasFilter,
    orderField,
    orderAsc
  ]
  )

  return { next, prev, jump, currentData, currentPage, maxPage, setElementPerPage }
}
