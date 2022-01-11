import ButtonMain from './mollecules/headerMain/ButtonMain'
import TitleMain from './mollecules/headerMain/TitleMain'

import { memo } from 'react'

const HeaderMain = () => (
  <div className='flex items-center justify-between my-10 md:my-14'>
    <TitleMain />
    <ButtonMain />
  </div>
)

export default memo(HeaderMain)
