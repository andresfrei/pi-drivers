import { Navbar } from '../ui/nav'
import Logo from '../logo'
import { Col, Container, Row } from '../ui/layout'
import { Link, useNavigate } from 'react-router-dom'
import { APP_URL_HOME, APP_URL_LANDING } from '../../config/constants'
import { ButtonPrimary } from '../ui/buttons'
import useLanguage from '../../hooks/useLanguage'
import useLoadData from '../../hooks/useLoadData'

export default function NavbarComponent () {
  const navigate = useNavigate()
  const { word } = useLanguage('navbar')
  const { clearState } = useLoadData()

  const handleClose = () => {
    clearState()
    navigate(APP_URL_LANDING)
  }

  return (
    <Navbar>
      <Container className='w-90'>
        <Row className='align-items-center justify-content-between'>
          <Col className='flex justify-content-start'>
            <Link to={APP_URL_HOME}>
              <Logo height='25px'/>
            </Link>
          </Col>
          <Col className='flex justify-content-end'>
            <ButtonPrimary
              width = '150px'
              onClick={handleClose}
            >{word('exit')}</ButtonPrimary>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
