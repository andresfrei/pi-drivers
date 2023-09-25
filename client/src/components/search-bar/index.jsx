import useLanguage from '../../hooks/useLanguage'
import { Input, SelectInput } from '../ui/inputs'
import { ButtonPrimary } from '../ui/buttons'
import { useRef } from 'react'
import useKey from '../../hooks/useKey'
import { FILED_NAME, FILED_NATIONALITY, FILED_TEAM, KEY_PAGINATION_CURRENT_PAGE, KEY_SEARCH_FIELD, KEY_SEARCH_HAS_FILTER, KEY_SEARCH_VALUE } from '../../config/constants'

export default function SearchBar ({ width = '300px' }) {
  const { word } = useLanguage('searchbar')

  const [searchField, setSearchField] = useKey(KEY_SEARCH_FIELD)
  const [searchValue, setSearchValue] = useKey(KEY_SEARCH_VALUE)
  const [hasFilter, setHasFilter] = useKey(KEY_SEARCH_HAS_FILTER)
  const [, setCuurentPage] = useKey(KEY_PAGINATION_CURRENT_PAGE)

  const inputRef = useRef(null)

  const handleSelected = (event) => {
    setSearchField(event.target.value)
    inputRef.current.focus()
  }

  const handleSearch = () => {
    if (hasFilter) {
      setHasFilter(false)
      setSearchValue('')
      // setDrivers()
      inputRef.current.focus()
    } else {
      setCuurentPage(1)
      setHasFilter(true)
      // setDrivers(FILED_NAME, searchValue)
    }
  }

  const handleKeyPress = (event) => event.key === 'Enter' && searchValue.length > 2 && handleSearch()

  return (
    <div className='flex gap-1'>
      <SelectInput
        width='200px'
        disabled={hasFilter}
        value={searchField}
        onChange={handleSelected}
      >
        <option value={FILED_NAME}>{word(FILED_NAME)}</option>
        <option value={FILED_TEAM}>{word(FILED_TEAM)}</option>
        <option value={FILED_NATIONALITY}>{word(FILED_NATIONALITY)}</option>
      </SelectInput>
      <Input
        autoFocus
        width={width}
        placeholder={`${word('search')} ${word(searchField)}`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        disabled={hasFilter}
        ref={inputRef}
        onKeyDown={ handleKeyPress}
      />
      <ButtonPrimary
        width='150px'
        disabled = {searchValue.length < 3}
        onClick={handleSearch}
      >
        {word(hasFilter ? 'btnclear' : 'btnsearch')}
      </ButtonPrimary>
    </div>
  )
}
