import usePagination from '../../hooks/usePagination'
import { Container, Row } from '../ui/layout'

import Driver from './driver'

export default function ListDrivers () {
  const { currentData } = usePagination()

  return (
    <Container>
      <Row className='gap-4'>
        {
          currentData.map(driver => <Driver key={driver.id} driver={driver} />)
        }
      </Row>
    </Container>
  )
}
