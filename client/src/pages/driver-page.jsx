import { useNavigate, useParams } from 'react-router-dom'

import { DRIVER_IMAGE_DEFAULT } from '../config/constants'

import useDriver from '../hooks/useDriver'
import useLanguage from '../hooks/useLanguage'

import { Col, Container, Row } from '../components/ui/layout'
import { Card, CardImage } from '../components/ui/card'
import { ButtonPrimary, ButtonSecondary } from '../components/ui/buttons'
import { formatDate } from '../libs/format.lib'

export default function DriverPage () {
  const { id } = useParams()
  const { driver } = useDriver(id)
  const { firstname, lastname, image, nationality, teams, description, wiki, birth } = driver

  const { word } = useLanguage('driver')

  const navigate = useNavigate()

  return (
    <Container className='page-h-full'>
      <Row className='justify-content-center align-items-center page-h-full'>
        <Card className='card-driver-page'>
          <Row >
            <Col>
              <CardImage
                width ='380px'
                height= '380px'
                src={image || DRIVER_IMAGE_DEFAULT}
              />
            </Col>
            <Col className='flex flex-column'>
              <h2 className='driver-page-title'>{`${firstname} ${lastname}`}</h2>
              <h4 className='driver-page-subtitle'>{`${nationality}  - ${formatDate(birth)}`}</h4>
              <p className='driver-page-description'>
                {description}
              </p>
            </Col>
          </Row>
          <Row className='my-4 w-100'>
              <Col>
                <h4 className='driver-page-subtitle mb-2'>Teams</h4>
                <div className='flex align-items-center mt-3 gap-1 '>
                  { teams.map(team =>
                    <h5
                    key={team}
                    className='driver-page-team'
                    >{team}</h5>)
                  }
                </div>
              </Col>
              <Col className='flex'>
                <ButtonSecondary
                  disabled ={!wiki}
                  onClick={() => window.open(wiki.replace('/en.', '/es.'), '_blank')}
                >{word('btnwiki')}</ButtonSecondary>
                <ButtonPrimary
                  onClick={() => navigate(-1)}
                >{word('btnback')}</ButtonPrimary>
              </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  )
}
