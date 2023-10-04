import { useNavigate } from 'react-router-dom'

import { Card, CardImage } from '../components/ui/card'
import { Col, Container, Row } from '../components/ui/layout'
import MultiSelect from '../components/ui/multyselect'
import { Title } from '../components/ui/text'

import { ButtonPrimary, ButtonSecondary } from '../components/ui/buttons'
import { Input, SelectInput, Option, TextArea } from '../components/ui/inputs'

import { APP_URL_HOME, DRIVER_IMAGE_DEFAULT, INICIAL_CREATED, KEY_NATIONALITIES, KEY_TEAMS } from '../config/constants'

import useForm from '../hooks/useForm'
import useKey from '../hooks/useKey'
import useLanguage from '../hooks/useLanguage'
import useDrivers from '../hooks/useDrivers'

import { createDriverValidate } from '../validator/drivers.validator'

export default function CreatePage () {
  const { word } = useLanguage('createdpage')
  const navigate = useNavigate()
  const [nationalities] = useKey(KEY_NATIONALITIES)
  const [teams] = useKey(KEY_TEAMS)

  const { createDriver } = useDrivers()

  const {
    values,
    handleChange,
    handleAddSelected,
    handleSubmit,
    fieldValidate,
    hasFieldError,
    hasError,
    errors
  } = useForm({
    initialValues: INICIAL_CREATED,
    validate: createDriverValidate
  })

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
                    onKeyDown={fieldValidate}
                    isError = {hasFieldError('firstname')}
                  />

                  <Input
                    name='lastname'
                    placeholder={word('lastname')}
                    value={values.lastname}
                    onChange={handleChange}
                    onKeyDown={fieldValidate}
                    isError = {hasFieldError('lastname')}
                  />

                  <TextArea
                    height = '200px'
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
                    onKeyDown={fieldValidate}
                    isError = {hasFieldError('image')}
                  />
                  <SelectInput
                    name='nationality'
                    value={values.nationality}
                    onChange={handleChange}
                    isError = {!!errors.nationality}
                  >
                    <option value="" selected>{word('nationality')}</option>
                    { nationalities.map(nationality => <Option key={nationality}>{nationality}</Option>) }
                  </SelectInput>
                  <Input
                    name='birth'
                    placeholder={word('birth')}
                    value={values.birth}
                    onChange={handleChange}
                    onKeyDown={fieldValidate}
                    isError = {hasFieldError('birth')}
                  />
                  <Input
                    name='wiki'
                    placeholder={word('wiki')}
                    value={values.wiki}
                    onChange={handleChange}
                    onKeyDown={fieldValidate}
                    isError = {hasFieldError('wikie')}

                  />
                  <MultiSelect
                    placeholder = {word('teams')}
                    selectedOptions={values.teams}
                    setSelectedOptions={handleSelect}
                    title='Equipos'
                    width='380px'
                    options={teams.map(team => team.name)}
                    isError = {!!errors.teams}
                    />
                    <div className='flex'>
                      <ButtonPrimary
                        disabled = {hasError}
                        onClick={() => handleSubmit(createDriver)}
                      >{word('btnSave')}</ButtonPrimary>
                      <ButtonSecondary
                        onClick={() => navigate(APP_URL_HOME)}
                      >{word('btnCancel')}</ButtonSecondary>
                    </div>
                </Col>
                { hasError && <p>{JSON.stringify(errors)}</p>}
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
