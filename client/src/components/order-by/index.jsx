import { SelectInput, Option } from '../ui/inputs'

export default function OrderBy () {
  return (
    <div className='flex gap-1'>
      <SelectInput >
        <Option>nombre</Option>
        <Option>apellido</Option>
        <Option>team</Option>
      </SelectInput>
      <SelectInput width='200px'>
        <Option>asc</Option>
        <Option>des</Option>
      </SelectInput>
    </div>
  )
}
