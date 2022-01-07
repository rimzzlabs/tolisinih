import { indicatorList } from '@/libs/constant'

import { Suspense, lazy, memo } from 'react'
import { useSelector } from 'react-redux'

const DropDownItem = lazy(() => import('@/components/atoms/DropDownItem'))

const PriorityDD = () => {
  const modalForm = useSelector((state) => state.modalForm)

  if (modalForm.isDropDownOpen) {
    return (
      <div
        data-cy='modal-add-priority-dropdown'
        className='flex flex-col absolute w-40 lg:w-48 h-72 rounded-lg border divide-y mt-2 divide-neutral-300 bg-white'
      >
        <Suspense fallback={null}>
          {indicatorList.map((item) => (
            <DropDownItem key={item.id} {...item} />
          ))}
        </Suspense>
      </div>
    )
  }

  return null
}

export default memo(PriorityDD)
