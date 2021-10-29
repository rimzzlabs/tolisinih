import { memo } from 'react'

function ActivityTitle({ title }) {
  return (
    <div className='flex items-start w-full h-full p-4 lg:p-8'>
      <h2 data-cy='activity-item-title' className='text-xl font-bold text-fontColor-900'>
        {title}
      </h2>
    </div>
  )
}

export default memo(ActivityTitle)
