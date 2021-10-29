import { Konteks } from '@/hooks/Context'
import { memo, useCallback, useContext } from 'react'

function EmptyTodos({ id }) {
  const { dispatchForm, dispatchModal } = useContext(Konteks)

  const handleClick = useCallback(() => {
    dispatchForm({ type: 'TODOS', id, title: '', priority: 'Very High', email: 'rmaulana.citra@gmail.com' })
    dispatchModal({ type: 'SHOW_FORM', id })
  }, [dispatchForm, dispatchModal])

  return (
    <img
      onClick={handleClick}
      data-cy='todo-empty-state'
      src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_PoDEwMe5H.svg?updatedAt=1635360520167'
      className='w-3/4 lg:w-1/2 cursor-pointer z-0'
      alt='empty activity item state'
    />
  )
}

export default memo(EmptyTodos)
