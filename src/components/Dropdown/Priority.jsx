import { Konteks } from '@/hooks/Context'
import { memo, useCallback, useContext } from 'react'

function Priority({ title, id }) {
  const { dispatchForm, formState, dispatchPriority } = useContext(Konteks)

  const handleClick = useCallback(() => {
    if (!formState.post) {
      dispatchForm({ type: 'EDIT_TODOS', title: formState.title, priority: title, id: formState.id })
      dispatchPriority({ type: 'CLOSE' })
      return
    }
    dispatchForm({ type: 'TODOS', title: formState.title, priority: title, id: '' })
    dispatchPriority({ type: 'CLOSE' })
    return
  }, [formState, dispatchForm, dispatchPriority])

  const color =
    title === 'Very High'
      ? 'bg-indicator-red'
      : title === 'High'
      ? 'bg-indicator-yellow'
      : title === 'Medium'
      ? 'bg-indicator-green'
      : title === 'Low'
      ? 'bg-indicator-blue'
      : 'bg-indicator-purple'

  return (
    <button
      data-cy='modal-add-priority-item'
      id={id}
      onClick={handleClick}
      className='flex items-center h-full w-full px-4 lg:px-6 cursor-pointer hover:bg-gray-100'>
      <div className={`w-3 h-3 rounded-full mr-4 lg:mr-6 ${color}`}></div>
      {title}
    </button>
  )
}

export default memo(Priority)
