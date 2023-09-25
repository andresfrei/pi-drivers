import { KEY_PAGINATION_CURRENT_PAGE, KEY_SEARCH_FIELD, KEY_SEARCH_HAS_FILTER, KEY_SEARCH_VALUE } from '../config/constants'
import useKey from './useKey'

export default function useFilter () {
  const [hasFilter, setHasFilter] = useKey(KEY_SEARCH_HAS_FILTER)
  const [searchfield, setSearchFiled] = useKey(KEY_SEARCH_FIELD)
  const [searchValue, setSearchValue] = useKey(KEY_SEARCH_VALUE)
  const [, setCurrentPage] = useKey(KEY_PAGINATION_CURRENT_PAGE)

  const handleFilter = () => {
    setCurrentPage(1) // Vuelvo a la página 1
    setHasFilter(true)
  }

  const handleClear = () => {
    setSearchValue('')
    setCurrentPage(1) // Vuelvo a la página 1
    setHasFilter(false)
  }

  return {
    hasFilter,
    searchfield,
    searchValue,
    setSearchFiled,
    setSearchValue,
    handleFilter,
    handleClear
  }
}
