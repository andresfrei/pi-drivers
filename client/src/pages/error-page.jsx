import { useNavigate, useRouteError } from 'react-router-dom'
import { ButtonPrimary } from '../components/ui/buttons'
import { Display1, Title } from '../components/ui/text'

export default function ErrorPage () {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <section className='text-center h-full flex flex-column  justify-content-center align-items-center '>
      <Display1>{error.status}</Display1>
      <Title> {error.statusText}</Title>
      <ButtonPrimary
        autoFocus
        width='200px'
        height='55px'
        onClick={() => navigate(-1)}
      >
        Back
      </ButtonPrimary>
    </section>
  )
}
