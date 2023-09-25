import { useNavigate } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../components/ui/buttons'
import { Card, CardImage } from '../components/ui/card'
import { Input, SelectInput, Option, TextArea } from '../components/ui/inputs'
import { Col, Container, Row } from '../components/ui/layout'
import MultiSelect from '../components/ui/multyselect'
import { Title } from '../components/ui/text'
import { APP_URL_HOME, DRIVER_IMAGE_DEFAULT, INICIAL_CREATED, KEY_NATIONALITIES, KEY_TEAMS } from '../config/constants'
import useForm from '../hooks/useForm'
import useKey from '../hooks/useKey'
import useLanguage from '../hooks/useLanguage'

export default function CreatePage () {
  const { values, handleChange, handleAddSelected } = useForm(INICIAL_CREATED)
  const { word } = useLanguage('createdpage')

  const navigate = useNavigate()

  const [nationalities] = useKey(KEY_NATIONALITIES)
  const [teams] = useKey(KEY_TEAMS)

  const handleSelect = (value) => handleAddSelected('teams', value)

  return (
    <Container>
      <Row className='my-3 text-center'>
        <Col>
          <Title>{word('title')}</Title>
        </Col>
      </Row>
      <Row>
        <Col className='flex justify-content-center'>
          <Card width='880px'>
            <Container>
              <Row className='flex gap-3'>
                <Col>
                  <CardImage width='400px' height='400px' src={values.image || DRIVER_IMAGE_DEFAULT} />
                </Col>
                <Col className='flex flex-column w-100 mx-3 my-3'>
                  <Input
                    autoFocus
                    name='firstname'
                    placeholder={word('firstname')}
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    name='lastname'
                    placeholder={word('lastname')}
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  <TextArea
                    name='description'
                    placeholder={word('description')}
                    value={values.description}
                    onChange={handleChange}
                  />
                  <Input
                    name='image'
                    placeholder={word('image')}
                    value={values.image}
                    onChange={handleChange}
                  />
                  <SelectInput>
                    { nationalities.map(nationality => <Option key={nationality}>{nationality}</Option>) }
                  </SelectInput>
                  <Input
                    type='date'
                    name='birth'
                    placeholder={word('birth')}
                    value={values.birth}
                    onChange={handleChange}
                  />
                  <Input
                    name='wiki'
                    placeholder={word('wiki')}
                    value={values.wiki}
                    onChange={handleChange}
                  />
                  <MultiSelect
                    selectedOptions={values.teams}
                    setSelectedOptions={handleSelect}
                    title='Equipos'
                    width='380px'
                    options={teams.map(team => team.name)}
                    />
                    <div className='flex'>
                      <ButtonPrimary
                      >{word('btnSave')}</ButtonPrimary>
                      <ButtonSecondary
                        onClick={() => navigate(APP_URL_HOME)}
                      >{word('btnCancel')}</ButtonSecondary>
                    </div>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
