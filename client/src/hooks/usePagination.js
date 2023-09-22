import { useEffect } from 'react'
import useDrivers from './useDrivers'
import useKey from './useKey'
import { KEY_LIST_DRIVERS, KEY_PAGE, KEY_PAGINATION } from '../config/constants'

export default function usePagination () {
  const { drivers } = useDrivers()
  const [elementPerPage, setElementPerPage] = useKey(KEY_PAGINATION)
  const [currentPage, setCurrentPage] = useKey(KEY_PAGE)
  const [currentData, setCurrentData] = useKey(KEY_LIST_DRIVERS)

  const maxPage = !drivers ? 0 : Math.ceil(drivers.length / elementPerPage)

  function next () {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage))
  }

  function prev () {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
  }

  function jump (page) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage))
  }

  useEffect(() => {
    const begin = (currentPage - 1) * elementPerPage
    const end = begin + elementPerPage
    setCurrentData(drivers.slice(begin, end))
  }, [drivers, elementPerPage, currentPage])

  return { next, prev, jump, currentData, currentPage, maxPage, setElementPerPage }
}
