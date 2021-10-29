import { Konteks } from '@/hooks/Context'
import { memo, useContext } from 'react'
import { BiCheck } from 'react-icons/bi'

function SortItem({ icon, title }) {
  const { dropdown, dispatchDropdown, sortTodos } = useContext(Konteks)

  function handleClick() {
    sortTodos({ type: title })
    dispatchDropdown({
      type: 'CLOSE',
      title,
    })
    dispatchDropdown({ type: 'OPEN', isOpen: false })
  }

  return (
    <button
      data-cy='sort-selection'
      onClick={handleClick}
      className='relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100'>
      <span className='text-primary-500'>{icon}</span>
      <span className='text-gray-800'>{title}</span>
      {dropdown.title === title && <span className='absolute right-4 lg:right-6'>{<BiCheck />}</span>}
    </button>
  )
}

export default memo(SortItem)
