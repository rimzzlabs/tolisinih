import { Konteks } from '@/hooks/Context'
import { memo, useContext } from 'react'

function EmptyTodos() {
  const { addNewActivity } = useContext(Konteks)
  return (
    <img
      onClick={addNewActivity}
      data-cy='activity-empty-state'
      src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_wJFQLMWOpxN.svg?updatedAt=1635360519343'
      className='w-3/4 lg:w-1/2 cursor-pointer'
      alt='empty activity state'
    />
  )
}

export default memo(EmptyTodos)
