import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/root-layout'

import LandingPage from '../pages/landing-page'
import HomePage from '../pages/home-page'

import ErrorPage from '../pages/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/home', element: <HomePage /> }
    ]
  }
])

export default router
