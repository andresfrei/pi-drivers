import { Card, CardTitle, CardGroup } from '../ui/card'
import { Col, Container, Row } from '../ui/layout'

export default function MessageBox ({ children, title = '', message = '' }) {
  return (
    <Container className='modal-container'>
      <Row>
        <Col>
          <Card>
            <CardTitle>{title}</CardTitle>
          </Card>
          <p>{message}</p>
          <CardGroup>
            {children}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}
