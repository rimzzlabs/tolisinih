import { setModalForm } from '@/redux/actions/modalFormAction'

import { Suspense, lazy, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Button = lazy(() => import('./Button'))

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
      <Suspense fallback={null}>
        <Button data-cy='modal-add-close-button' onclick={closeModal} className='text-4xl text-neutral-400'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z'></path>
          </svg>
        </Button>
      </Suspense>
    </div>
  )
}

export default memo(FormHeader)
