import Order from './order'
import Origin from './origin'
import Pagination from './pagination'

export default function Options ({ onClose }) {
  return (
    <div className='flex flex-column gap-3 mt-4'>
      <Origin/>
      <Order/>
      <Pagination/>
    </div>
  )
}
