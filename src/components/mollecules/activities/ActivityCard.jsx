import Trash from '@/components/atoms/Trash'

import { setModalAlert } from '@/redux/actions/modalAlertAction'

import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ActivityCard = ({ id, title, created_at }) => {
  const formatter = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long'
  })
  const date = formatter.format(new Date(created_at))
  const dispatch = useDispatch()
  const router = useNavigate()

  const showModalAlert = () => dispatch(setModalAlert({ id, title, isOpen: true, type: 'Activity' }))
  const goToDetailPage = () => router('/detail/' + id)

  return (
    <div
      onClick={goToDetailPage}
      data-cy='activity-item'
      className='flex flex-col items-center justify-between min-h-[14rem] rounded md:cursor-pointer shadow bg-white'
    >
      <div className='w-full h-full p-2 md:p-4'>
        <h3 data-cy='activity-item-title'>{title}</h3>
      </div>

      <div className='flex items-center justify-between w-full p-2 md:p-4'>
        <p data-cy='activity-item-date'>{date}</p>
        <Trash
          onClick={(e) => {
            e.stopPropagation()
            showModalAlert()
          }}
        />
      </div>
    </div>
  )
}

export default memo(ActivityCard)
