import { capsLetter } from '@/libs/capsLetter'
import { setModalForm } from '@/redux/actions/modalFormAction'

import Indicator from './Indicator'
import ChevronDown from './icons/ChevronDown'

import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
      <Indicator type={modalForm.priority} />
      <span className='text-xs md:text-sm xl:text-base font-semibold'>{priority}</span>
      <ChevronDown />
    </button>
  )
}

export default memo(ButtonPriority)
