import { Navbar, Nav, NavLink } from '../ui/nav'
import Logo from '../logo'
import { Col, Container, Row } from '../ui/layout'
import { Link } from 'react-router-dom'
import { APP_URL_ABOUT, APP_URL_HOME, APP_URL_LANDING, APP_URL_NATIONALITIES, APP_URL_TEAMS } from '../../config/constants'
import useLanguage from '../../hooks/useLanguage'

export default function NavbarComponent () {
  const { word } = useLanguage('navbar')

  return (
    <Navbar>
      <Container className='w-90'>
        <Row className='align-items-center'>
          <Col className='flex justify-content-start'>
            <Link to={APP_URL_HOME}>
              <Logo height='25px'/>
            </Link>
          </Col>
          <Col>
            <Nav className='flex justify-content-end'>
              <NavLink>
                <Link to={APP_URL_HOME} >{word('drivers')}</Link>
              </NavLink>
              <NavLink>
                <Link to={APP_URL_TEAMS} >{word('teams')}</Link>
              </NavLink>
              <NavLink>
                <Link to={APP_URL_NATIONALITIES} >{word('nationalities')}</Link>
              </NavLink>
              <NavLink>
                <Link to={APP_URL_ABOUT} >{word('about')}</Link>
              </NavLink>
              <NavLink>
                <Link to={APP_URL_LANDING} >{word('exit')}</Link>
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
