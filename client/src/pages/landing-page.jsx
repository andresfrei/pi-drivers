import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from '../components/ui/buttons'

import { Container, Row, Col } from '../components/ui/layout'
import { Display1, Display3 } from '../components/ui/text'

import useLanguage from '../hooks/useLanguage'
import { APP_URL_HOME } from '../config/constants'
import Logo from '../components/logo'
import useDrivers from '../hooks/useDrivers'

export default function LandingPage () {
  const { word } = useLanguage('landingPage')
  const { loadData } = useDrivers()
  const navigate = useNavigate()

  const handleGet = async () => {
    const res = await loadData()
    res.resolved && navigate(APP_URL_HOME)
  }

  return (
    <Container >
      <Row className='justify-content-center align-items-center h-full'>
        <Col className='text-center'>
          <Display1>{word('title')}</Display1>
          <Display3 >{word('welcome')}</Display3>
        </Col>
        <Col className='flex flex-column align-items-center   text-center gap-2'>
          <Logo height='50px'/>
          <ButtonPrimary
            radius='100px'
            width='350px'
            size='1.3rem'
            onClick={handleGet}
          >
            {word('home')}
          </ButtonPrimary>
        </Col>
      </Row>
  </Container>
  )
}
