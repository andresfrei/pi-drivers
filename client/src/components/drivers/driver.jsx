import { Card } from '../ui/card'

export default function Driver ({ driver }) {
  const { firstname, lastname } = driver
  return (
    <Card>
        <h3>{`${firstname} ${lastname}`}</h3>
    </Card>
  )
}
