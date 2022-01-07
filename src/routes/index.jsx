import { lazy, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages'))
const Detail = lazy(() => import('@/pages/DetailPage'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:slug' element={<Detail />} />
    </Routes>
  )
}

export default memo(MyRoutes)
