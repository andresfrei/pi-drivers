import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import useLoadData from '../hooks/useLoadData'
import { useEffect } from 'react'
import Loader from '../components/loader'

export default function AppLayout () {
  const { hasLoad, dataUpload } = useLoadData()

  // Si no hay estado lo cargo
  useEffect(() => { if (!hasLoad) dataUpload() }, [])

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
