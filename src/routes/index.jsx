import { Suspense, lazy, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages'))
const Detail = lazy(() => import('@/pages/DetailPage'))
const RedirectPage = lazy(() => import('@/pages/RedirectPage'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<div className='text-center'>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path='/detail/:slug'
        element={
          <Suspense fallback={<div className='text-center'>Loading...</div>}>
            <Detail />
          </Suspense>
        }
      />

      <Route
        path='*'
        element={
          <Suspense fallback={<div className='text-center'>Loading...</div>}>
            <RedirectPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default memo(MyRoutes)
