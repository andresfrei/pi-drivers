import { useNavigate } from 'react-router-dom'
import { APP_URL_DRIVER } from '../../config/constants'
import { Card, CardImage, CardSubtitle, CardTitle } from '../ui/card'

export default function Driver ({ driver }) {
  const { id, firstname, lastname, image, nationality } = driver

  const navigate = useNavigate()

  return (
    <Card
      width ='225px'
      height ='312.38px'
      padding= '0'
      scale ='1.02'
      className='pointer'
      onClick={() => navigate(`${APP_URL_DRIVER}/${id}`)}
    >
      <CardImage
        width ='225px'
        height= '225px'
        src={image}
      />
      <CardTitle className='text-center'>
        {`${firstname} ${lastname}`}
      </CardTitle>
      <CardSubtitle>
        {nationality}
      </CardSubtitle>
    </Card>
  )
}
