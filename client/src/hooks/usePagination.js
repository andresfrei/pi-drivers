import useDrivers from './useDrivers'
import useKey from './useKey'
import { KEY_LIST_DRIVERS, KEY_PAGE, KEY_PAGINATION } from '../config/constants'
import { useEffect } from 'react'

export default function usePagination () {
  const { drivers } = useDrivers()
  const [elementPerPage, setElementPerPage] = useKey(KEY_PAGINATION)
  const [currentPage, setCurrentPage] = useKey(KEY_PAGE)
  const [currentData, setCurrentData] = useKey(KEY_LIST_DRIVERS)

  const maxPage = !drivers ? 0 : Math.ceil(drivers.length / elementPerPage)

  const next = () => setCurrentPage(currentPage + 1)

  const prev = () => setCurrentPage(currentPage - 1)

  const jump = (page) => setCurrentPage(page)

  useEffect(() => {
    const begin = (currentPage - 1) * elementPerPage
    const end = begin + elementPerPage
    setCurrentData(drivers.slice(begin, end))
  }, [elementPerPage, currentPage, drivers])

  return { next, prev, jump, currentData, currentPage, maxPage, setElementPerPage }
}
