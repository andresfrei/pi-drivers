import { Card, CardTitle, CardGroup } from '../ui/card'

export default function MessageBox ({ children, title = '', message = '', height = '200px', width = '350px' }) {
  return (
    <div className='modal-container'>
          <Card
            width={width}
            height={height}
          >
            <CardTitle>{title}</CardTitle>
            <p>{message}</p>
            <CardGroup>
              {children}
            </CardGroup>
          </Card>
    </div>
  )
}
