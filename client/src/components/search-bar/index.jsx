import useLanguage from '../../hooks/useLanguage'
import { Input, SelectInput } from '../ui/inputs'
import { ButtonPrimary } from '../ui/buttons'
import { useRef } from 'react'
import { FILED_NAME, FILED_NATIONALITY, FILED_TEAM } from '../../config/constants'
import useFilter from '../../hooks/useFilter'

export default function SearchBar ({ width = '300px' }) {
  const { word } = useLanguage('searchbar')

  const { searchValue, searchfield, setSearchFiled, setSearchValue, handleFilter, handleClear, hasFilter } = useFilter()

  const inputRef = useRef(null)

  const handleSelected = (event) => {
    setSearchFiled(event.target.value)
    inputRef.current.focus()
  }

  const handleSearch = () => {
    if (hasFilter) {
      handleClear()
      inputRef.current.focus()
      // setDrivers()
    } else {
      handleFilter()
      // setDrivers(FILED_NAME, searchValue)
    }
  }

  const handleKeyPress = (event) => event.key === 'Enter' && searchValue.length > 2 && handleSearch()

  return (
    <div className='flex gap-1'>
      <SelectInput
        width='200px'
        disabled={hasFilter}
        value={searchfield}
        onChange={handleSelected}
      >
        <option value={FILED_NAME}>{word(FILED_NAME)}</option>
        <option value={FILED_TEAM}>{word(FILED_TEAM)}</option>
        <option value={FILED_NATIONALITY}>{word(FILED_NATIONALITY)}</option>
      </SelectInput>
      <Input
        autoFocus
        width={width}
        placeholder={`${word('search')} ${word(searchfield)}`}
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
