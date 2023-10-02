import { KEY_FILTER_ORIGIN, ORIGIN_ALL, ORIGIN_API, ORIGIN_DB } from '../../config/constants'
import useKey from '../../hooks/useKey'
import { SelectInput } from '../ui/inputs'

export default function Origin () {
  const [items, setItems] = useKey(KEY_FILTER_ORIGIN)

  return (
    <div className='flex align-items-center w-100'>
        <label className='option-label'>Origen de datos</label>
        <SelectInput width='320px'
          value={items}
          onChange={(e) => setItems(e.target.value) }
        >
          <option value={ORIGIN_ALL}>todos</option>
          <option value={ORIGIN_API}>api</option>
          <option value={ORIGIN_DB}>db</option>
        </SelectInput>
      </div>
  )
}
