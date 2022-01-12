import Button from '@/components/atoms/Button'
import Danger from '@/components/atoms/icons/Danger'

import { doDelete, doGet } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'
import { setModalAlert } from '@/redux/actions/modalAlertAction'
import { setSelectedActivity } from '@/redux/actions/selectedActivityAction'

import { memo } from 'react'
import { batch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

const ModalAlert = () => {
  const modalAlert = useSelector((state) => state.modalAlert)
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const dispatch = useDispatch()

  const closeModal = () => dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }))

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    batch(() => {
      dispatch(setModalAlert({ id: null }))
      dispatch(setActivity(response.data))
    })
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
      <Danger data-cy='modal-delete-icon' />

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
