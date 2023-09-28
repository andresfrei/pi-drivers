import { Link } from 'react-router-dom'

export default function SocialIcon ({ src = '', to = '#', alt = '', width = '50px', height = '50px' }) {
  return (
    <Link
      to={to}
      target='_blank'
    >
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        />
    </Link>
  )
}
