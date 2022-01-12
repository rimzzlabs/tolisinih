import Check from '@/components/atoms/icons/Check'
import SortType from '@/components/atoms/icons/SortType'

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
        <SortType type={type} />
      </span>

      <span data-cy='sort-selection-title'>{title}</span>

      {sortOptions.sortBy === type && <Check />}
    </button>
  )
}

export default memo(SortItem)
