import BackButton from '@/components/atoms/BackButton'
import Pen from '@/components/atoms/icons/Pen'

import { doPatch } from '@/libs/doFetch'
import { setSelectedActivity } from '@/redux/actions/selectedActivityAction'
import { setTitle } from '@/redux/actions/setTitleAction'

import { memo } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const TitleMain = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const titleActivity = useSelector((state) => state.titleActivity)

  const editTitle = () => dispatch(setTitle({ title: selectedActivity.title, isEditing: true }))
  const handleChange = (e) => dispatch(setTitle({ title: e.target.value }))

  const handlePatch = async () => {
    await doPatch('/activity-groups/' + selectedActivity.id, { title: titleActivity.title })
    batch(() => {
      dispatch(setSelectedActivity({ title: titleActivity.title }))
      dispatch(setTitle({ title: null, isEditing: false }))
    })
  }

  const handleSync = async () => {
    if (titleActivity.title === selectedActivity.title) {
      dispatch(setTitle({ title: null, isEditing: false }))
    } else if (!titleActivity.title) {
      dispatch(setTitle({ title: selectedActivity.title, isEditing: false }))
    } else {
      await handlePatch()
    }
  }

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') await handleSync()
  }

  return (
    <div className='flex items-center space-x-2 md:space-x-3'>
      {pathname !== '/' && <BackButton />}
      {!titleActivity.isEditing && pathname !== '/' && (
        <h2 data-cy='todo-title' onClick={editTitle}>
          {selectedActivity.title}
        </h2>
      )}
      {pathname === '/' && <h2 data-cy='activity-title'>Activity</h2>}

      {titleActivity.isEditing && pathname !== '/' && (
        <input
          type='text'
          onKeyDown={handleKeyPress}
          onBlur={handleSync}
          onChange={handleChange}
          value={titleActivity.title}
          className='py-1 md:py-2 text-xl font-bold md:text-3xl bg-transparent border-b outline-none text-neutral-700 border-neutral-700'
          autoFocus
        />
      )}
      {pathname !== '/' && <Pen data-cy='todo-title-edit-button' onClick={editTitle} onBlur={handleSync} />}
    </div>
  )
}

export default memo(TitleMain)
