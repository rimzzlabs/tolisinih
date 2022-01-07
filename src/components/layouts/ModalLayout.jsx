import clsx from 'clsx'
import { memo } from 'react'

const ModalLayout = ({ children, onClick, dataCy }) => {
  return (
    <div className={clsx('fixed w-full h-screen', 'top-0 left-0')}>
      <section
        data-cy={dataCy}
        onClick={onClick}
        className='flex items-center justify-center w-full h-full bg-zinc-900/50'
      >
        {children}
      </section>
    </div>
  )
}

export default memo(ModalLayout)
