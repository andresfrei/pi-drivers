import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import useLoadData from '../hooks/useLoadData'
import { useEffect } from 'react'
import Loader from '../components/loader'
import { APP_URL_ERROR, APP_URL_LANDING, KEY_ERROR } from '../config/constants'
import useKey from '../hooks/useKey'
import useLanguage from '../hooks/useLanguage'

export default function AppLayout () {
  const { hasLoad, dataUpload } = useLoadData()
  const [, setError] = useKey(KEY_ERROR)
  const navigate = useNavigate()

  const { word } = useLanguage('errors')

  // Si no hay estado lo cargo
  useEffect(() => {
    if (!hasLoad) {
      dataUpload().then(res => {
        // Si no resuelve genero error
        if (!res.resolved) {
          setError({ status: 500, message: word('api'), url: APP_URL_LANDING })
          navigate(APP_URL_ERROR)
        }
      })
    }
  }, [])

  if (!hasLoad) return <Loader/>

  return (
    <>
      <header className='flex flex-column gap-2 align-items-center'>
        <Navbar/>
      </header>
      <Outlet/>
    </>
  )
}
