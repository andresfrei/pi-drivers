import { Container, Row } from '../components/ui/layout'
import { Title } from '../components/ui/text'

import usePagination from '../hooks/usePagination'
import useLanguage from '../hooks/useLanguage'

import ToolBar from '../components/tool-bar'
import Driver from '../components/driver'
import Pagination from '../components/pagination'

export default function ListDrivers () {
  const { currentData, maxPage } = usePagination()
  const { word } = useLanguage('driverslist')

  return (
    <Container className='flex flex-column gap-3'>
      <Row className='my-3'>
        <ToolBar/>
        <Title className='text-center w-100'>
          {word('title')}
        </Title>
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
