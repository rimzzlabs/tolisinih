import * as Icon from '@/components/atoms/Icon'

import { setSortOption } from '@/redux/actions/sortOptionsAction'

import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SortItem = ({ title, type }) => {
  const dispatch = useDispatch()
  const sortOptions = useSelector((state) => state.sortOptions)

  const handleClick = () => dispatch(setSortOption({ sortBy: type, isOpen: false }))

  return (
    <button
      onClick={handleClick}
      data-cy='sort-selection'
      className='relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100'
    >
      <span className='text-sky-500'>
        <Icon.SortIcon type={type} />
      </span>

      <span data-cy='sort-selection-title'>{title}</span>

      {sortOptions.sortBy === type && <Icon.CheckIcon />}
    </button>
  )
}

export default memo(SortItem)
