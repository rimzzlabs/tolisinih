import { BiTrashAlt } from 'react-icons/bi'
import { memo } from 'react'

function ActivityFooter({ date, dispatchModal, title, id }) {
  return (
    <div className='flex items-center justify-between w-full h-12 lg:h-14 '>
      <p data-cy='activity-item-date' className='text-sm text-gray-500'>
        {date}
      </p>
      <button
        data-cy='activity-item-delete-button'
        onClick={(e) => {
          e.stopPropagation()
          dispatchModal({ type: 'CONFIRM', message: title, id: id })
        }}
        className='flex items-center justify-center w-10 h-10 outline-none'>
        <BiTrashAlt />
      </button>
    </div>
  )
}

export default memo(ActivityFooter)
