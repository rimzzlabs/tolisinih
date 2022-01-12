import { setModalForm } from '@/redux/actions/modalFormAction'

import Eks from './icons/Eks'

import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FormHeader = () => {
  const dispatch = useDispatch()
  const modalForm = useSelector((state) => state.modalForm)

  const closeModal = () => {
    const payload = {
      isOpen: false,
      isSubmitted: false,
      title: '',
      priority: '',
      isDropDownOpen: false,
      is_active: false
    }
    dispatch(setModalForm(payload))
  }

  return (
    <div className='flex items-center justify-between w-full h-24 px-4 lg:px-8'>
      <div data-cy='modal-add-title' className='text-xl font-semibold text-fontColor-900'>
        {modalForm.titleForm}
      </div>
      <Eks data-cy='modal-add-close-button' onClick={closeModal} />
    </div>
  )
}

export default memo(FormHeader)
