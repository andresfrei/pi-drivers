import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'

import OrderBy from '../order-by'
import SearchBar from '../search-bar'
import { ButtonPrimary } from '../ui/buttons'
import { Card } from '../ui/card'

import { APP_URL_CREATE } from '../../config/constants'

export default function ToolBar () {
  const { word } = useLanguage('toolbar')
  const navigate = useNavigate()
  return (
    <Card>
      <div className='flex flex-fill gap-5'>
        <ButtonPrimary
          width = '150px'
          onClick={() => navigate(APP_URL_CREATE)}
        >
        {word('create')}
        </ButtonPrimary>
        <SearchBar/>
        <OrderBy/>
      </div>
    </Card>
  )
}
