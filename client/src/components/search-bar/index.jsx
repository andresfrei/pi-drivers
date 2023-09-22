import useLanguage from '../../hooks/useLanguage'
import { Input } from '../ui/inputs'
import { ButtonPrimary } from '../ui/buttons'
import { useRef, useState } from 'react'

export default function SearchBar () {
  const { word } = useLanguage('searchbar')
  const [searchValue, setSearchValue] = useState('')
  const [filterSearch, setFilterSearch] = useState(false)

  const inputRef = useRef(null)

  const handleSearch = (e) => {
    if (filterSearch) {
      setFilterSearch(false)
      setSearchValue('')
      inputRef.current.focus()
    } else {
      setFilterSearch(true)
      //! FUNCION DE BUSCAR
    }
  }

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
      />
      <ButtonPrimary
        width='150px'
        disabled = {searchValue.length < 4}
        onClick={handleSearch}
      >
        {word(filterSearch ? 'btnclear' : 'btnsearch')}
      </ButtonPrimary>
    </div>
  )
}
