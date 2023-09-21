import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import useLoader from '../hooks/useLoader'
import useLanguage from '../hooks/useLanguage'

import Loader from '../components/loader'

import { APP_KEY_LANGUAGE, DEFAULT_LANGUAGE } from '../config/constants'

export default function RootLayout () {
  const { loaderValue, loaderOnOff } = useLoader(true)
  const { setLanguage } = useLanguage()

  useEffect(() => {
    const language = window.localStorage.getItem(APP_KEY_LANGUAGE) || DEFAULT_LANGUAGE
    setLanguage(language)
    loaderOnOff(false)
  }, [])

  return (
    <main className='h-full'>
      {loaderValue && <Loader/>}
      <Outlet/>
    </main>
  )
}
