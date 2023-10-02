import { KEY_PAGINATION_ITEMS } from '../../config/constants'
import useKey from '../../hooks/useKey'
import { SelectInput } from '../ui/inputs'

export default function Pagination () {
  const [items, setItems] = useKey(KEY_PAGINATION_ITEMS)

  return (
    <div className='flex align-items-center'>
        <label className='option-label'>Cards por página</label>
        <SelectInput width='150px'
          value={items}
          onChange={(e) => setItems(Number(e.target.value)) }
        >
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </SelectInput>
      </div>
  )
}
