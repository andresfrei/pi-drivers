import useLanguage from '../../hooks/useLanguage'
import { Input } from '../ui/inputs'
import { ButtonPrimary } from '../ui/buttons'
import { useRef } from 'react'
import useKey from '../../hooks/useKey'
import { FILED_NAME, KEY_FILTER_SEARCH, KEY_SEARCH } from '../../config/constants'
import useDrivers from '../../hooks/useDrivers'

export default function SearchBar () {
  const { word } = useLanguage('searchbar')
  const [searchValue, setSearchValue] = useKey(KEY_SEARCH)
  const [filterSearch, setFilterSearch] = useKey(KEY_FILTER_SEARCH)
  const { setDrivers } = useDrivers()

  const inputRef = useRef(null)

  const handleSearch = () => {
    if (filterSearch) {
      setFilterSearch(false)
      setSearchValue('')
      setDrivers()
      inputRef.current.focus()
    } else {
      setFilterSearch(true)
      setDrivers(FILED_NAME, searchValue)
    }
  }

  const handleKeyPress = (event) => event.key === 'Enter' && handleSearch()

  return (
    <div className='flex gap-1'>
      <Input
        autoFocus
        width='220px'
        placeholder={word('search')}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        disabled={filterSearch}
        ref={inputRef}
        onKeyDown={ handleKeyPress}
      />
      <ButtonPrimary
        width='150px'
        disabled = {searchValue.length < 3}
        onClick={handleSearch}
      >
        {word(filterSearch ? 'btnclear' : 'btnsearch')}
      </ButtonPrimary>
    </div>
  )
}
