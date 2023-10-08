import { KEY_PAGINATION_CURRENT_PAGE, KEY_PAGINATION_ITEMS } from '../../config/constants'
import useKey from '../../hooks/useKey'
import { SelectInput } from '../ui/inputs'

export default function Pagination () {
  const [items, setItems] = useKey(KEY_PAGINATION_ITEMS)
  const [, setCurrentPage] = useKey(KEY_PAGINATION_CURRENT_PAGE)

  const handleChange = (e) => {
    const { value } = e.target
    setCurrentPage(1)
    setItems(Number(value))
  }

  return (
    <div className='flex align-items-center'>
        <label className='option-label'>Cards por página</label>
        <SelectInput width='150px'
          value={items}
          onChange={handleChange}
        >
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </SelectInput>
      </div>
  )
}
