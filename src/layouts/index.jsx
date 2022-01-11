import ButtonMain from '@/components/mollecules/headerMain/ButtonMain'
import TitleMain from '@/components/mollecules/headerMain/TitleMain'

import Header from '../components/Header'
import HeaderMain from '../components/HeaderMain'

import { memo } from 'react'

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
          <TitleMain />
          <ButtonMain />
        </HeaderMain>
        <main className='pb-10'>{children}</main>
      </div>
    </>
  )
}

export default memo(Layout)
