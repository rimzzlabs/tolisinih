import Header from '../components/Header'
import HeaderMain from '../components/HeaderMain'

import { Suspense, lazy, memo } from 'react'

const ButtonMain = lazy(() => import('@/components/mollecules/headerMain/ButtonMain'))
const TitleMain = lazy(() => import('@/components/mollecules/headerMain/TitleMain'))

/**
 *
 * @param {{children: React.ReactNode}} param0
 * @returns
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='layout'>
        <HeaderMain>
          <Suspense fallback={null}>
            <TitleMain />
          </Suspense>
          <Suspense fallback={null}>
            <ButtonMain />
          </Suspense>
        </HeaderMain>
        <main>{children}</main>
      </div>
    </>
  )
}

export default memo(Layout)
