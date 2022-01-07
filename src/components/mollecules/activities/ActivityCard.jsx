import Trash from '@/components/atoms/Trash'

import { formatDate } from '@/libs/formatDate'
import { setModalAlert } from '@/redux/actions/modalAlertAction'

import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

/** an ActivityCard that will display
 * An UI component of activity card
 * accept 2 props:
 * - activity: an object that contains the data of activity
 * - date: a string that contains the date of activity
 * @param {{id: number title: string, created_at: string}} param0
 */
export const ActivityCard = ({ id, title, created_at }) => {
  const date = formatDate(created_at)
  const dispatch = useDispatch()
  const router = useNavigate()

  const showModalAlert = () => dispatch(setModalAlert({ id, title, isOpen: true, type: 'Activity' }))

  return (
    <div
      onClick={() => router('/detail/' + id)}
      data-cy='activity-item'
      className={clsx(
        'flex flex-col items-center justify-between',
        'min-h-[14rem] rounded md:cursor-pointer',
        'shadow bg-white'
      )}
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
