import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/root-layout'
import AppLayout from '../layouts/app-layout'

import LandingPage from '../pages/landing-page'
import AboutPage from '../pages/about-page'

import DriversPage from '../pages/drivers-page'
import DriverPage from '../pages/driver-page'

import ErrorPage from '../pages/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/about', element: <AboutPage /> },
      {
        path: '/app',
        element: <AppLayout />,
        children: [
          { path: '/app/drivers', element: <DriversPage/> },
          { path: '/app/drivers/:id', element: <DriverPage/> }
        ]
      }
    ]
  }
])

export default router
