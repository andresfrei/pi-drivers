import { useNavigate, useParams } from 'react-router-dom'

import { APP_URL_HOME, DRIVER_IMAGE_DEFAULT, FILED_NATIONALITY, FILED_TEAM } from '../config/constants'

import useDriver from '../hooks/useDriver'
import useLanguage from '../hooks/useLanguage'

import { Col, Container, Row } from '../components/ui/layout'
import { Card, CardImage } from '../components/ui/card'
import { ButtonPrimary, ButtonSecondary } from '../components/ui/buttons'
import { formatDate } from '../libs/format'

import useFilter from '../hooks/useFilter'
import Icon from '../components/icon'

import deleteIcon from '../assets/paperbin.svg'
import { useState } from 'react'
import MessageBox from '../components/message-box'

export default function DriverPage () {
  const { id } = useParams()
  const { driver, handleDelete } = useDriver(id)
  const { firstname, lastname, image, nationality, teams, description, wiki, birth } = driver

  const [showDelete, setShowDelete] = useState(false)

  const { setSearchFiled, setSearchValue, handleFilter } = useFilter()

  const { word } = useLanguage('driver')

  const navigate = useNavigate()

  // Me fijo si es de DB
  const hasDeleted = id.length > 5

  const handleFilterByTeam = (team) => {
    setSearchFiled(FILED_TEAM)
    setSearchValue(team)
    handleFilter()
    navigate(APP_URL_HOME)
  }

  const handleFilterByNationality = () => {
    setSearchFiled(FILED_NATIONALITY)
    setSearchValue(nationality)
    handleFilter()
    navigate(APP_URL_HOME)
  }

  const handleConfirDelete = () => {
    setShowDelete(false)
    handleDelete()
  }

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
            <Col className='flex flex-column relative'>
              {hasDeleted &&
                <Icon
                  className='driver-delete'
                  src={deleteIcon}
                  onClick={() => setShowDelete(true)}
                />
              }
              <h2 className='driver-page-title'>{`${firstname} ${lastname}`}</h2>
              <h5 className='driver-id'><span>ID: </span>{id}</h5>
              <div className='flex align-items-center '>
                <h4 className='driver-page-natonality' onClick={handleFilterByNationality}>{nationality}</h4>
                <h4 className='driver-page-subtitle'>{formatDate(birth)}</h4>
              </div>
              <p className='driver-page-description'>
                {description}
              </p>
            </Col>
          </Row>
          <Row>
              <Col className='flex flex-column driver-col'>
                <h4 className='driver-page-subtitle mb-2'>Teams</h4>
                <div className='flex gap-1 wrap w-100'>
                  { teams.map(team =>
                    <h5
                      key={team}
                      className='driver-page-team'
                      onClick={() => handleFilterByTeam(team)}
                    >{team}</h5>)
                  }
                </div>
              </Col>
              <Col className='flex driver-col justify-content-center align-items-end'>
                <div className='flex w-100 driver-buttons'>
                  <ButtonSecondary
                    disabled ={!wiki}
                    onClick={() => window.open(wiki.replace('/en.', '/es.'), '_blank')}
                  >{word('btnwiki')}</ButtonSecondary>
                  <ButtonPrimary
                    onClick={() => navigate(-1)}
                  >{word('btnback')}</ButtonPrimary>
               </div>
              </Col>
          </Row>
        </Card>
      </Row>
      { showDelete &&
        <MessageBox
          title={word('msgBoxTitle')}
          message={word('msgBoxMessage')}
        >
          <ButtonPrimary
            onClick={handleConfirDelete}
          >{word('confirm')}</ButtonPrimary>
          <ButtonSecondary
            onClick={() => setShowDelete(false)}
          >{word('cancel')}</ButtonSecondary>
        </MessageBox>
      }
    </Container>
  )
}
