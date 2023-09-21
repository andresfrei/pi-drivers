import { useNavigate, useRouteError } from 'react-router-dom'
import { useRef } from 'react'

export default function ErrorPage () {
  const error = useRouteError()
  const navigate = useNavigate()

  const defaultFocus = useRef(null)

  return (
    <div className='container' >
      <div className='row'>
        <div className='col'>
          <h1 className='display-1'>{error.status}</h1>
          <h4 className=''>{error.statusText}</h4>
          <button
            onClick={() => navigate(-1)}
            ref={defaultFocus}
            label='Volver'
          />
       </div>
      </div>
    </div>

  )
}
