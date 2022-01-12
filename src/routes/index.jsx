import { Suspense, lazy, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages'))
const Detail = lazy(() => import('@/pages/DetailPage'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path='/detail/:slug'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Detail />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default memo(MyRoutes)
