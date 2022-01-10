import DropDownItem from '@/components/atoms/DropDownItem'

import { indicatorList } from '@/libs/constant'

import { memo } from 'react'
import { useSelector } from 'react-redux'

const PriorityDD = () => {
  const modalForm = useSelector((state) => state.modalForm)

  if (modalForm.isDropDownOpen) {
    return (
      <div
        data-cy='modal-add-priority-dropdown'
        className='flex flex-col absolute w-40 lg:w-48 h-72 rounded-lg border divide-y mt-2 divide-neutral-300 bg-white'
      >
        {indicatorList.map((item) => (
          <DropDownItem key={item.id} {...item} />
        ))}
      </div>
    )
  }

  return null
}

export default memo(PriorityDD)
