import Button from '@/components/atoms/Button'
import * as Icon from '@/components/atoms/Icon'

import { createActivity } from '@/libs/createActivity'
import { doGet, doPost } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'
import { setModalForm } from '@/redux/actions/modalFormAction'
import { setSortOption } from '@/redux/actions/sortOptionsAction'

import SortList from '../sorts/SortList'

import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ButtonMain = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const sortOptions = useSelector((state) => state.sortOptions)
  const modalForm = useSelector((state) => state.modalForm)

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    dispatch(setActivity(response.data))
  }

  const addNewActivity = async () => {
    const activity = createActivity()
    await doPost('/activity-groups', activity)
    await syncActivity()
  }

  const showForm = useCallback(() => {
    dispatch(
      setModalForm({
        isOpen: true,
        titleForm: 'Tambah List Item',
        priority: 'Very High'
      })
    )
  }, [modalForm.isOpen])

  const showSortOpt = () => {
    dispatch(setSortOption({ isOpen: !sortOptions.isOpen }))
  }

  if (pathname === '/') {
    return (
      <Button data-cy='activity-add-button' onClick={addNewActivity}>
        <Icon.PlusIcon />
        <span className='sr-only sm:not-sr-only'>Tambah</span>
      </Button>
    )
  }

  return (
    <div className='flex items-center space-x-2 md:scroll-px-3'>
      <Icon.SortIcon
        data-cy='todo-sort-button'
        className='w-8 md:w-10 p-2 md:p- aspect-square border rounded-full  cursor-pointer text-neutral-800'
        onClick={showSortOpt}
      />

      <div className='relative'>{sortOptions.isOpen && <SortList />}</div>

      <Button data-cy='todo-add-button' onClick={showForm}>
        <Icon.PlusIcon />
        <span className='sr-only sm:not-sr-only'>Tambah</span>
      </Button>
    </div>
  )
}

export default memo(ButtonMain)
