import { memo, useCallback } from 'react'
import { BiTrashAlt } from 'react-icons/bi'

function TodoTrash({ dispatchDropdown, dispatchModal, todoId, title, path }) {
  const handleClick = useCallback(() => {
    dispatchDropdown({ type: 'CLOSED' })
    dispatchModal({ type: 'TODO_CONFIRM', id: todoId, message: title, path })
  }, [dispatchDropdown, dispatchModal])

  return (
    <div className='flex items-center justify-end w-full h-full'>
      <BiTrashAlt
        data-cy='todo-item-delete-button'
        onClick={handleClick}
        className='text-xl lg:text-2xl cursor-pointer text-gray-600'
      />
    </div>
  )
}

export default memo(TodoTrash)
