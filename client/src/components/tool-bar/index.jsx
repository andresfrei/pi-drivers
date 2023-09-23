import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'

import SearchBar from '../search-bar'
import { ButtonPrimary, ButtonSecondary } from '../ui/buttons'
import { Card } from '../ui/card'

import { APP_URL_CREATE } from '../../config/constants'

export default function ToolBar () {
  const { word } = useLanguage('toolbar')
  const navigate = useNavigate()
  return (
    <Card direction ='row' justify='space-around'>
        <ButtonSecondary
          width = '150px'
          onClick={() => navigate(APP_URL_CREATE)}
        >
          {word('create')}
        </ButtonSecondary>
        <SearchBar width='350px'/>
        <ButtonPrimary
          width = '150px'
          onClick={() => navigate(APP_URL_CREATE)}
        >
        {word('more')}
        </ButtonPrimary>
    </Card>
  )
}
