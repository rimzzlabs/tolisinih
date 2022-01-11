import { doGet, doPost } from '@/libs/doFetch'
import { setModalForm } from '@/redux/actions/modalFormAction'
import { setSelectedActivity } from '@/redux/actions/selectedActivityAction'

import { memo, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Input = () => {
  const modalForm = useSelector((state) => state.modalForm)
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet(`/activity-groups/${selectedActivity.id}`)
    dispatch(setSelectedActivity(response))
  }

  const postTodo = async () => {
    if (!modalForm.title) {
      return
    }
    const payload = {
      title: modalForm.title,
      priority: modalForm.priority === 'Medium' ? 'normal' : modalForm.priority.replace(' ', '-').toLowerCase(),
      activity_group_id: selectedActivity.id
    }

    await doPost('/todo-items', payload).finally(() =>
      dispatch(setModalForm({ isOpen: false, isDropDownItem: false, title: '', priority: 'Very High' }))
    )
    await syncActivity()
  }

  // handlechange with useMemo
  const handleChange = useMemo(() => {
    return (e) => {
      dispatch(
        setModalForm({
          ...modalForm,
          title: e.target.value
        })
      )
    }
  }, [modalForm.title, modalForm.priority])

  const onSubmitWithEnter = async (e) => {
    if (e.key === 'Enter') await postTodo()
  }

  return (
    <input
      onChange={handleChange}
      onKeyDown={onSubmitWithEnter}
      data-cy='modal-add-name-input'
      id='item-name'
      placeholder='Tambahkan nama list item'
      className='block w-full h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-neutral-400 focus:border-primary-500'
      value={modalForm.title}
    />
  )
}

export default memo(Input)
