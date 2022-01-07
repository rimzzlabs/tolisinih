import { capsLetter } from '@/libs/capsLetter'
import { setModalForm } from '@/redux/actions/ModalFormAction'

import { Suspense, lazy, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Indicator = lazy(() => import('./Indicator'))

const ButtonPriority = () => {
  const modalForm = useSelector((state) => state.modalForm)
  const dispatch = useDispatch()

  const showDropDown = useCallback(() => {
    const payload = {
      isDropDownOpen: !modalForm.isDropDownOpen
    }
    dispatch(setModalForm(payload))
  }, [])

  const priority = capsLetter(modalForm.priority)

  return (
    <button
      onClick={showDropDown}
      data-cy='modal-add-priority-dropdown'
      className='flex items-center justify-between mt-2 lg:mt-4 px-4 lg:px-6 w-40 lg:w-48 h-12 lg:h-14 rounded-md transition outline-none border border-neutral-400 hover:border-primary-500 focus:border-primary-500'
    >
      <Suspense fallback={null}>
        <Indicator title={modalForm.priority} />
      </Suspense>

      <span className='text-xs md:text-sm xl:text-base font-semibold text-fontColor-900'>{priority}</span>

      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        height='1em'
        className='text-xl'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z'></path>
      </svg>
    </button>
  )
}

export default memo(ButtonPriority)
