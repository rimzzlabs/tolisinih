import { memo, useCallback } from 'react'

function Checkbox({ isActive, checklistTodo, setIsActive, todoId }) {
  const handdleOnChange = useCallback(() => {
    const data = {
      is_active: isActive ? 0 : 1,
    }
    checklistTodo(todoId, data)
    setIsActive(!isActive)
  }, [isActive, checklistTodo, setIsActive])

  return <input data-cy='todo-item-checkbox' type='checkbox' checked={isActive ? false : true} onChange={handdleOnChange} />
}

export default memo(Checkbox)
