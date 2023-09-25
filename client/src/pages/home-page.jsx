import { Container, Row } from '../components/ui/layout'

import usePagination from '../hooks/usePagination'

import ToolBar from '../components/tool-bar'
import Driver from '../components/driver'
import Pagination from '../components/pagination'

export default function ListDrivers () {
  const { currentData, maxPage } = usePagination()

  return (
    <Container className='flex flex-column gap-3'>
      <Row className='flex my-3 '>
        <ToolBar/>
      </Row>
      <Row className='flex justify-content-center gap-4'>
        {
          currentData.map(driver => <Driver key={driver.id} driver={driver} />)
        }
      </Row>
      { !!currentData.length && maxPage > 1 &&
      <Row>
        <Pagination/>
      </Row>
      }
    </Container>
  )
}
