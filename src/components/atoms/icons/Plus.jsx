import { memo } from 'react'

const PlusIcon = ({ ...props }) => (
  <svg
    {...props}
    className='h-6 w-6'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='8' x2='12' y2='16' />

    <line x1='8' y1='12' x2='16' y2='12' />
  </svg>
)

export default memo(PlusIcon)
