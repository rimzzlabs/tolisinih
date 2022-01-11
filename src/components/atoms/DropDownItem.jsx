import { setModalForm } from '@/redux/actions/modalFormAction'

import Indicator from './Indicator'

import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

const DropDownItem = ({ title, id }) => {
  const dispatch = useDispatch()

  const updatePriority = useCallback(() => {
    const payload = {
      priority: title,
      isDropDownOpen: false
    }
    dispatch(setModalForm(payload))
  }, [dispatch])

  return (
    <button
      id={id}
      onClick={updatePriority}
      data-cy='modal-add-priority-item'
      className='flex items-center h-full w-full px-4 lg:px-6 cursor-pointer hover:bg-neutral-100'
    >
      <Indicator type={title} />
      <span>{title}</span>
    </button>
  )
}

export default memo(DropDownItem)
