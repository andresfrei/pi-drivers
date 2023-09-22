import { Container, Row } from '../components/ui/layout'
import ToolBar from '../components/tool-bar'
import ListDrivers from '../components/drivers/list-drivers'
import useLanguage from '../hooks/useLanguage'
import { Title } from '../components/ui/text'

export default function HomePage () {
  const { word } = useLanguage('driverslist')

  return (
    <Container>
      <Row className='my-4'>
        <ToolBar/>
        <Title className='text-center w-100 mt-3'>
          {word('title')}
        </Title>
      </Row>
      <Row>
        <ListDrivers/>
      </Row>
    </Container>
  )
}
