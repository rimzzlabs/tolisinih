import { memo } from 'react'

const Check = ({ ...props }) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    className='absolute right-4 h-4 w-4 md:w-6 md:h-6'
    data-cy='sort-selection-selected'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
  </svg>
)

export default memo(Check)
