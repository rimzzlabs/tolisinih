import { memo } from 'react'

const HeaderMain = ({ children }) => <div className='flex items-center justify-between my-10 md:my-14'>{children}</div>

export default memo(HeaderMain)
