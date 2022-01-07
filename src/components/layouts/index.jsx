import Header from '../Header'
import HeaderMain from '../HeaderMain'
import ButtonMain from '../mollecules/headerMain/ButtonMain'
import TitleMain from '../mollecules/headerMain/TitleMain'

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
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
