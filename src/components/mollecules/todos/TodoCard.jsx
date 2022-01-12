import Indicator from '@/components/atoms/Indicator'
import Pen from '@/components/atoms/icons/Pen'
import Trash from '@/components/atoms/icons/Trash'

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
        <Indicator type={priority} />
        <h3 data-cy='todo-item-title' className='lg:text-lg font-semibold text-fontColor-900 '>
          {title}
        </h3>

        <Pen className='w-5 h-5' onClick={showModalFormEdit} data-cy='todo-item-edit-button' />
      </div>

      <Trash
        data-cy='todo-item-delete-button'
        onClick={showModalAlert}
        className='text-xl lg:text-2xl cursor-pointer text-gray-600'
      />
    </div>
  )
}

export default memo(TodoCard)
