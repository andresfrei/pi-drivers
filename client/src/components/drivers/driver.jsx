import { Card, CardImage, CardSubtitle, CardTitle } from '../ui/card'

export default function Driver ({ driver }) {
  const { firstname, lastname, image, nationality } = driver

  return (
    <Card
      width ='250px'
      padding= '0'
      scale ='1.02'
      className='pointer'
    >
      <CardImage
        width ='250px'
        height= '250px'
        src={image}
      />
      <CardTitle>
        {`${firstname} ${lastname}`}
      </CardTitle>
      <CardSubtitle>
        {nationality}
      </CardSubtitle>
    </Card>
  )
}
