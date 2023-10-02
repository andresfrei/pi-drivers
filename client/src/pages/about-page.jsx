import { useNavigate } from 'react-router-dom'

import useLanguage from '../hooks/useLanguage'

import { Col, Container, Row } from '../components/ui/layout'
import { Card, CardImage } from '../components/ui/card'
import { ButtonPrimary } from '../components/ui/buttons'
import { Subtitle, Title } from '../components/ui/text'

import Logo from '../components/logo'
import SocialIcon from '../components/social-icon'

import { DEV_AVATAR, DEV_GITHUB, DEV_LINKEDIN } from '../config/constants'

import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

export default function AbountPage () {
  const navigate = useNavigate()
  const { word } = useLanguage('about')
  return (
    <Container className='flex h-full justify-content-center align-items-center my-5 '>
      <Card width='700px'>
        <Row className='flex gap-5'>
          <Col className='flex flex-column align-items-center text-center'>
            <CardImage
              width='170px'
              height='170px'
              src={DEV_AVATAR}
              className='rounded'
            />
            <Title>Andres Frei</Title>
            <div className='flex justify-content-center gap-1'>
              <SocialIcon
                to={DEV_GITHUB}
                src={githubIcon}
              />
              <SocialIcon
                width='45px'
                to={DEV_LINKEDIN}
                src={linkedinIcon}
              />
            </div>
          </Col>
          <Col className='flex flex-column justify-content-between  align-items-center gap-5'>
              <div className='flex flex-column gap-1 align-items-center '>
              <Title>{word('about')}</Title>
              <Logo height='40px'/>
              </div>
              <p>{word('text')}</p>
              <div className='flex flex-column'>
                <Subtitle>Tecnologias</Subtitle>
                <div className='flex flex gap-1 wrap w-100'>
                  <h5 className='driver-page-team'>React</h5>
                  <h5 className='driver-page-team'>React Router</h5>
                  <h5 className='driver-page-team'>Redux Toolkit</h5>
                  <h5 className='driver-page-team'>Styled Components</h5>
                  <h5 className='driver-page-team'>CSS Modules</h5>
                  <h5 className='driver-page-team'>Custom hooks</h5>
                  <h5 className='driver-page-team'>Express</h5>
                  <h5 className='driver-page-team'>Sequelize</h5>
                  <h5 className='driver-page-team'>PostgreSQL</h5>
                  <h5 className='driver-page-team'>Axios</h5>
                </div>
              </div>
            <ButtonPrimary
              onClick={() => navigate(-1)}
            >{word('back')}</ButtonPrimary>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
