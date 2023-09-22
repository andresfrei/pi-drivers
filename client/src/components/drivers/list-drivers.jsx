import useLanguage from '../../hooks/useLanguage'
// import usePagination from '../../hooks/usePagination'

import { Container, Row } from '../ui/layout'
import { Title } from '../ui/text'

// import Driver from './driver'

export default function ListDrivers () {
  // const { currentData } = usePagination()
  const { word } = useLanguage('driverslist')
  return (
    <section>
      <Title>{word('title')}</Title>
      <Container>
        <Row>
          { /* currentData.length && currentData.map(driver => <Driver key={driver.id} />)  */}
        </Row>
      </Container>
    </section>
  )
}
