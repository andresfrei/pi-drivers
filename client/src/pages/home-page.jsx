import { Container, Row } from '../components/ui/layout'
import ToolBar from '../components/tool-bar'
import ListDrivers from '../components/drivers/list-drivers'

export default function HomePage () {
  return (
    <Container>
      <Row className='my-4 flex gap-3'>
        <ToolBar/>
      </Row>
      <Row>
        <ListDrivers/>
      </Row>
    </Container>
  )
}
