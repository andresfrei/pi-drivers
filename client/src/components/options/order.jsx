import { KEY_ORDER_ASC, KEY_ORDER_FIELD } from '../../config/constants'
import useKey from '../../hooks/useKey'
import useLanguage from '../../hooks/useLanguage'
import { SelectInput } from '../ui/inputs'

export default function Order () {
  const [field, setField] = useKey(KEY_ORDER_FIELD)
  const [asc, setAsc] = useKey(KEY_ORDER_ASC)

  const { word } = useLanguage('fields')

  return (
    <div className='flex align-items-center'>
        <label className='option-label' >Ordenar por</label>
        <SelectInput
          value={field}
          onChange={(e) => setField(e.target.value) }
        >
          <option value="id">id</option>
          <option value="firstname">{word('firstname')}</option>
          <option value="lastname">{word('lastname')}</option>
          <option value="nationality">{word('nationality')}</option>
          <option value="birth">{word('birth')}</option>
        </SelectInput>

        <SelectInput width='150px'
          value={asc}
          onChange={(e) => setAsc(e.target.value) }
        >
          <option value="asc">{word('asc')}</option>
          <option value="desc">{word('des')}</option>
        </SelectInput>
      </div>
  )
}
