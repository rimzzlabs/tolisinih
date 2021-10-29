import { Konteks } from '@/hooks/Context'
import { memo, useContext, useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import TodoBody from './TodoBody'
import TodoTrash from './TodoTrash'

function Todo({ title, priority, id: todoId, path, is_active }) {
  const { dispatchModal, dispatchForm, checklistTodo, dispatchDropdown } = useContext(Konteks)
  const [, setLoading] = useState(false)
  const [isActive, setIsActive] = useState(null)

  const color =
    priority === 'very-high'
      ? 'bg-indicator-red'
      : priority === 'high'
      ? 'bg-indicator-yellow'
      : priority === 'normal'
      ? 'bg-indicator-green'
      : priority === 'low'
      ? 'bg-indicator-blue'
      : 'bg-indicator-purple'

  useEffect(() => {
    setLoading(true)
    setIsActive(is_active)

    return () => setLoading(false)
  }, [])

  return (
    <div
      data-cy='todo-item'
      className='flex items-center justify-between w-full h-14 sm:h-16 lg:h-20 px-4 lg:px-8 rounded-lg shadow bg-white'>
      <div className='flex items-center space-x-2 lg:space-x-4 w-full h-full'>
        <Checkbox checklistTodo={checklistTodo} todoId={todoId} isActive={isActive} setIsActive={setIsActive} />
        <TodoBody
          color={color}
          priority={priority}
          dispatchDropdown={dispatchDropdown}
          dispatchForm={dispatchForm}
          dispatchModal={dispatchModal}
          isActive={isActive}
          is_active={is_active}
          todoId={todoId}
          title={title}
        />
      </div>
      <TodoTrash
        todoId={todoId}
        title={title}
        path={path}
        dispatchDropdown={dispatchDropdown}
        dispatchModal={dispatchModal}
      />
    </div>
  )
}

export default memo(Todo)
