import { BiPencil } from 'react-icons/bi'
import { memo, useCallback } from 'react'

function TodoBody({ color, isActive, title, dispatchDropdown, dispatchForm, todoId, priority, is_active, dispatchModal }) {
  const handleClick = useCallback(() => {
    dispatchDropdown({ type: 'CLOSED' })
    dispatchForm({
      type: 'EDIT_TODOS',
      id: todoId,
      title: title,
      priority: priority === 'normal' ? 'Medium' : priority,
      is_active: is_active,
    })
    dispatchModal({ type: 'EDIT_FORM', id: todoId })
  }, [dispatchDropdown, dispatchForm, dispatchModal])

  return (
    <>
      <span data-cy='todo-item-priority-indicator' className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${color}`}></span>
      <h3
        data-cy='todo-item-title'
        className={`lg:text-lg font-semibold text-fontColor-900 ${!isActive ? 'line-through opacity-50' : ''}`}>
        {title}
      </h3>
      <BiPencil
        data-cy='todo-item-edit-button'
        onClick={handleClick}
        className='text-lg lg:text-xl cursor-pointer text-gray-400'
      />
    </>
  )
}

export default memo(TodoBody)
