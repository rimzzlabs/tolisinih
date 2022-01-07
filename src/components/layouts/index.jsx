import { Suspense, lazy, memo } from 'react'

const Header = lazy(() => import('@/components/Header'))
const HeaderMain = lazy(() => import('@/components/HeaderMain'))
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
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <div className='layout'>
        <Suspense fallback={null}>
          <HeaderMain>
            <Suspense fallback={null}>
              <TitleMain />
            </Suspense>
            <Suspense fallback={null}>
              <ButtonMain />
            </Suspense>
          </HeaderMain>
        </Suspense>
        <main>{children}</main>
      </div>
    </>
  )
}

export default memo(Layout)
