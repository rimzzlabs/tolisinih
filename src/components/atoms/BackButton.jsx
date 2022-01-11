import { memo } from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Link
      data-cy='todo-back-button'
      to='/'
      className='inline-flex items-center justify-center p-2 md:p-3 border rounded-full active:scale-95'
    >
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        height='1.5rem'
        width='1.5rem'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z'></path>
      </svg>
      <span className='sr-only'>Back to Home</span>
    </Link>
  )
}

export default memo(BackButton)
