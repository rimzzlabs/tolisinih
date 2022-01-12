import { memo } from 'react'

const Header = () => {
  return (
    <div className='bg-sky-500'>
      <header data-cy='header-background' className='layout flex items-center h-16 md:h-24'>
        <h1 data-cy='header-title' className='text-neutral-100'>
          TO DO LIST APP
        </h1>
      </header>
    </div>
  )
}

export default memo(Header)
