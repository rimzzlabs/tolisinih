import { setModalForm } from '@/redux/actions/ModalFormAction'

import { Suspense, lazy, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

const Indicator = lazy(() => import('@/components/atoms/Indicator'))

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
      <Suspense fallback={null}>
        <Indicator title={title} />
      </Suspense>
      <span>{title}</span>
    </button>
  )
}

export default memo(DropDownItem)
