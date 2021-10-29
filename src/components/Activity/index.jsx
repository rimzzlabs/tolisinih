import { Konteks } from '@/hooks/Context'
import { useHistory } from 'react-router-dom'
import { memo, useContext } from 'react'
import ActivityTitle from './ActivityTitle'
import ActivityFooter from './ActivityFooter'

function Activity({ title, created_at, id }) {
  const { dispatchModal, dispatchTitle, setSlug } = useContext(Konteks)

  const { push } = useHistory()
  const date = formatter(new Date(created_at))

  function formatter(date) {
    return date.toLocaleString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  function goToDetail() {
    dispatchTitle({ type: 'POST', title })
    localStorage.setItem('slug', id)
    setSlug(id)
    push(`/detail/${id}`)
  }

  return (
    <div
      data-cy='activity-item'
      onClick={goToDetail}
      className='flex flex-col items-center justify-between w-full h-60 rounded-lg shadow-md bg-white'>
      <ActivityTitle title={title} />
      <div className='flex items-end w-full px-4'>
        <ActivityFooter title={title} id={id} dispatchModal={dispatchModal} date={date} />
      </div>
    </div>
  )
}

export default memo(Activity)
