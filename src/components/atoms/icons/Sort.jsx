import { memo } from 'react'

const Sort = ({ ...props }) => (
  <svg
    {...props}
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z'></path>
  </svg>
)

export default memo(Sort)
