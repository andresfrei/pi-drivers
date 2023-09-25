import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'

import SearchBar from '../search-bar'
import { ButtonSecondary } from '../ui/buttons'
import { Card } from '../ui/card'

import { APP_URL_CREATE } from '../../config/constants'
import { Col, Container, Row } from '../ui/layout'

import Options from '../options'
import { useState } from 'react'

export default function ToolBar () {
  const [showOptions, setShowOptions] = useState(false)
  const { word } = useLanguage('toolbar')
  const navigate = useNavigate()
  return (
    <Card >
      <Container>
        <Row className='flex justify-content-between'>
          <Col>
            <ButtonSecondary
              width = '150px'
              onClick={() => navigate(APP_URL_CREATE)}
            >
              {word('create')}
            </ButtonSecondary>
          </Col>
          <Col>
            <SearchBar width='300px'/>
          </Col>
          <Col className='flex justify-content-end mr-2'>
            <ButtonSecondary
              width = '150px'
              onClick={() => setShowOptions(!showOptions)}
            >
              {word('more')}
            </ButtonSecondary>
          </Col>
        </Row>
        { showOptions &&
          <Row>
            <Options/>
          </Row>
        }
      </Container>
    </Card>
  )
}
