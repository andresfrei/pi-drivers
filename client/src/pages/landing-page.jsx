import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from '../components/ui/buttons'

import { Container, Row } from '../components/ui/layout'
import { Display1, Display3 } from '../components/ui/text'

import useLanguage from '../hooks/useLanguage'
import { APP_URL_HOME } from '../config/constants'
import Logo from '../components/logo'
import { useEffect } from 'react'
import useLoadData from '../hooks/useLoadData'

export default function LandingPage () {
  const { clearState } = useLoadData()
  const { word } = useLanguage('landingPage')
  const navigate = useNavigate()

  // Limpio estados
  useEffect(() => clearState(), [])

  return (
    <Container >
      <Row className='flex flex-column justify-content-center align-items-center h-full gap-4'>
        <div className='flex flex-column justify-content-center align-items-center'>
          <Display1>{word('title')}</Display1>
          <Display3 >{word('welcome')}</Display3>
          <Logo height='50px'/>
        </div>
        <div className='mt-5'>
          <ButtonPrimary
            radius='100px'
            width='350px'
            size='1.3rem'
            onClick={() => navigate(APP_URL_HOME)}
          >
            {word('home')}
          </ButtonPrimary>
        </div>
      </Row>
  </Container>
  )
}
