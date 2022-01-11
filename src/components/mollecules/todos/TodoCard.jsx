import Indicator from '@/components/atoms/Indicator'

import { doGet, doPatch } from '@/libs/doFetch'
import { setModalAlert } from '@/redux/actions/modalAlertAction'
import { setModalForm } from '@/redux/actions/modalFormAction'
import { setSelectedActivity } from '@/redux/actions/selectedActivityAction'

import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoCard = ({ id, title, priority, is_active }) => {
  const [checked, setChecked] = useState(is_active ? false : true)
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet(`/activity-groups/${selectedActivity.id}`)
    dispatch(setSelectedActivity(response))
  }

  const handleCheckbox = async () => {
    setChecked(!checked)
    await doPatch('/todo-items/' + id, { is_active: checked ? 1 : 0 })
    await syncActivity()
  }

  const showModalAlert = () => {
    dispatch(setModalAlert({ type: 'Item', id: id, isOpen: true, title: title }))
  }

  const showModalFormEdit = () => {
    dispatch(
      setModalForm({
        isOpen: true,
        title: title,
        priority: priority,
        titleForm: 'Edit Item',
        id: id
      })
    )
  }

  return (
    <div
      data-cy='todo-item'
      className='flex items-center justify-between w-full h-14 md:h-16 px-4 lg:px-8 rounded-lg shadow bg-white'
    >
      <div className='flex items-center space-x-2 lg:space-x-4 w-full h-full'>
        <input data-cy='todo-item-checkbox' type='checkbox' onChange={handleCheckbox} checked={checked} />
        <Indicator title={priority} />
        <h3 data-cy='todo-item-title' className='lg:text-lg font-semibold text-fontColor-900 '>
          {title}
        </h3>

        <button
          onClick={showModalFormEdit}
          data-cy='todo-item-edit-button'
          className='text-lg lg:text-xl cursor-pointer text-gray-400'
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M16.589 9L15.003 7.414 5.906 16.511 5.377 18.625 7.491 18.097z'></path>
            <path transform='rotate(134.999 18.003 6)' fill='none' d='M16.882 4.879H19.125V7.122H16.882z'></path>
            <path d='M4.003,21c0.081,0,0.162-0.01,0.242-0.03l4-1c0.176-0.044,0.337-0.135,0.465-0.263L21.003,7.414 c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414L19.417,3c-0.756-0.756-2.072-0.756-2.828,0L4.296,15.293 c-0.128,0.128-0.219,0.289-0.263,0.464l-1,4c-0.086,0.341,0.015,0.701,0.263,0.95C3.485,20.897,3.741,21,4.003,21z M18.003,4.414 L19.589,6l-1.586,1.586L16.417,6L18.003,4.414z M5.906,16.511l9.097-9.097L16.589,9l-9.098,9.097l-2.114,0.528L5.906,16.511z'></path>
          </svg>
        </button>
      </div>
      <div className='flex items-center justify-end w-full h-full'>
        <button
          data-cy='todo-item-delete-button'
          onClick={showModalAlert}
          className='text-xl lg:text-2xl cursor-pointer text-gray-600'
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z'></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default memo(TodoCard)
