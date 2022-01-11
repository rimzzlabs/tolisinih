import { memo } from 'react'

const ModalLayout = ({ children, ...props }) => {
  return (
    <div {...props} className='fixed w-full h-screen flex items-center justify-center top-0 left-0 bg-zinc-900/50'>
      {children}
    </div>
  )
}

export default memo(ModalLayout)
