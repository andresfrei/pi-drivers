import { Navbar } from '../ui/nav'
import Logo from '../logo'
import { Col, Container, Row } from '../ui/layout'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { APP_URL_ABOUT, APP_URL_HOME, APP_URL_LANDING } from '../../config/constants'
import { ButtonPrimary, ButtonSecondary } from '../ui/buttons'
import useLanguage from '../../hooks/useLanguage'
import useLoadData from '../../hooks/useLoadData'
import { SelectInput } from '../ui/inputs'

export default function NavbarComponent () {
  const navigate = useNavigate()
  const { word, selected, setLanguage } = useLanguage('navbar')
  const { clearState } = useLoadData()

  const { pathname } = useLocation()

  const hidden = pathname !== APP_URL_HOME

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
          <Col className='flex justify-content-end align-items-center '>
            <SelectInput
              hidden = {hidden}
              height='50px'
              width='70px'
              value={selected}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="br">BR</option>
            </SelectInput>
            <ButtonSecondary
              width = '150px'
              hidden = {hidden}
              onClick={() => navigate(APP_URL_ABOUT)}
            >{word('about')}</ButtonSecondary>
            <ButtonPrimary
              width = '150px'
              hidden = {hidden}
              onClick={handleClose}
            >{word('exit')}</ButtonPrimary>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
