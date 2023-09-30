import { Card } from '../components/ui/card'
import { FormInput, FormLabel, FromGroup } from '../components/ui/form'
import { Container } from '../components/ui/layout'

export default function Test () {
  return (
    <Container className='h-full flex justify-content-center align-items-center'>
      <Card>
        <FromGroup>
          <FormInput/>
          <FormLabel>Label</FormLabel>
        </FromGroup>
      </Card>
    </Container>
  )
}
