import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from '../components/ui/buttons'
import { Display1, Title } from '../components/ui/text'
import useKey from '../hooks/useKey'
import { KEY_ERROR } from '../config/constants'
import { Container } from '../components/ui/layout'

export default function ErrorPage () {
  const [error] = useKey(KEY_ERROR)
  const navigate = useNavigate()

  return (
    <Container
      width='600px'
      className='flex flex-column justify-content-center align-items-center text-center h-full gap-5'>
      <Display1>Error: {error.status}</Display1>
      <Title>{error.message}</Title>
      <ButtonPrimary
        width='300px'
        autoFocus
        onClick={() => navigate(error.url)}
      >
        Back
      </ButtonPrimary>
    </Container>
  )
}
