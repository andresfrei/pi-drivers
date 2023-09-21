import { ButtonPrimary } from '../components/ui/buttons'
import { Container, Col } from '../components/ui/grid'
import { Title, Subtitle } from '../components/ui/text'
import useLanguage from '../hooks/useLanguage'

export default function LandingPage () {
  const { word } = useLanguage('landingPage')
  return (
    <Container
      className='w-100 h-full justify-content-center align-items-center'
      gap='4rem'
    >
        <Col className='text-center'>
          <Title>{word('title')}</Title>
          <Subtitle >{word('welcome')}</Subtitle>
          <Subtitle >{word('by')}</Subtitle>
        </Col>
        <Col className='text-center'>
          <ButtonPrimary radius='100px' width='280px'>
            {word('home')}
          </ButtonPrimary>
        </Col>
  </Container>
  )
}
