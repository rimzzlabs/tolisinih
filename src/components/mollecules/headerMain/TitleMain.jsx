import * as Icon from '@/components/atoms/Icon'
import { MyLink } from '@/components/atoms/MyLink'

import { doPatch } from '@/libs/doFetch'
import { setSelectedActivity } from '@/redux/actions/SelectedActivityAction'
import { setTitle } from '@/redux/actions/SetTitleAction'

import clsx from 'clsx'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const TitleMain = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const titleActivity = useSelector((state) => state.titleActivity)

  const editTitle = () => dispatch(setTitle({ title: selectedActivity.title, isEditing: true }))
  const handleChange = useCallback((e) => dispatch(setTitle({ title: e.target.value })), [titleActivity.title])

  const handlePatch = async () => {
    await doPatch('/activity-groups/' + selectedActivity.id, { title: titleActivity.title })
    dispatch(setSelectedActivity({ title: titleActivity.title }))
    dispatch(setTitle({ title: null, isEditing: false }))
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSync()
    }
  }

  return (
    <div className='flex items-center space-x-2 md:space-x-3'>
      {pathname !== '/' && <MyLink />}
      {!titleActivity.isEditing && pathname !== '/' && (
        <h2 data-cy='todo-title' onClick={editTitle}>
          {selectedActivity?.title}
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
          className={clsx(
            'py-1 md:py-2 text-xl font-bold md:text-3xl',
            'bg-transparent border-b outline-none',
            'text-neutral-700 border-neutral-700'
          )}
          autoFocus
        />
      )}
      {pathname !== '/' && (
        <div data-cy='todo-title-edit-button' onClick={editTitle} onBlur={handleSync}>
          <Icon.PencilIcon />
        </div>
      )}
    </div>
  )
}

export default TitleMain
