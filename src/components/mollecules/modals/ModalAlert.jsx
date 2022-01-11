import Button from '@/components/atoms/Button'

import { doDelete, doGet } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'
import { setModalAlert } from '@/redux/actions/modalAlertAction'
import { setSelectedActivity } from '@/redux/actions/selectedActivityAction'

import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ModalAlert = () => {
  const modalAlert = useSelector((state) => state.modalAlert)
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const dispatch = useDispatch()

  const closeModal = () => dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }))

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    dispatch(setModalAlert({ id: null }))
    dispatch(setActivity(response.data))
  }

  const syncSelectedActivity = async () => {
    const response = await doGet(`/activity-groups/${selectedActivity.id}`)
    dispatch(setSelectedActivity(response))
  }

  const onDelete = async () => {
    if (modalAlert.type === 'Activity') {
      await doDelete(`/activity-groups/${modalAlert.id}`)
      await syncActivity()
    } else {
      await doDelete(`/todo-items/${modalAlert.id}`)
      await syncSelectedActivity()
    }
    dispatch(setModalAlert({ isDeleteComplete: true }))
  }

  return (
    <div
      data-cy='modal-delete'
      onClick={(e) => e.stopPropagation()}
      className='flex flex-col items-center justify-center h-80 md:h-[24rem] aspect-[1.25/1] rounded bg-white'
    >
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        data-cy='modal-delete-icon'
        className='w-16 md:w-24 aspect-square text-red-500 h-full'
        height='100%'
        width='100%'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M11.001 10H13.001V15H11.001zM11 16H13V18H11z'></path>
        <path d='M13.768,4.2C13.42,3.545,12.742,3.138,12,3.138s-1.42,0.407-1.768,1.063L2.894,18.064 c-0.331,0.626-0.311,1.361,0.054,1.968C3.313,20.638,3.953,21,4.661,21h14.678c0.708,0,1.349-0.362,1.714-0.968 c0.364-0.606,0.385-1.342,0.054-1.968L13.768,4.2z M4.661,19L12,5.137L19.344,19H4.661z'></path>
      </svg>
      <h3 data-cy='modal-delete-title' className='text-center font-normal px-8 md:px-16'>
        Apakah anda yakin ingin menghapus {modalAlert.type} <strong>&quot;{modalAlert.title}&quot;</strong>?
      </h3>
      <div className='flex items-center justify-center w-full h-full space-x-2 md:space-x-3'>
        <Button
          data-cy='modal-delete-cancel-button'
          onClick={closeModal}
          className='bg-neutral-200 text-neutral-900 font-semibold px-8 md:px-12'
        >
          Batal
        </Button>
        <Button
          data-cy='modal-delete-confirm-button'
          onClick={onDelete}
          className='bg-red-500 text-white font-semibold px-8 md:px-12'
        >
          Hapus
        </Button>
      </div>
    </div>
  )
}

export default memo(ModalAlert)
