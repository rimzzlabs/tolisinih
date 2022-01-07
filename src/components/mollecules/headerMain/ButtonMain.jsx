import Button from '@/components/atoms/Button'
import * as Icon from '@/components/atoms/Icon'

import { createActivity } from '@/libs/createActivity'
import { doGet, doPost } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/ActivityAction'
import { setModalForm } from '@/redux/actions/ModalFormAction'
import { setSortOption } from '@/redux/actions/sortOptionsAction'

import SortList from '../sorts/SortList'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ButtonMain = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const sortOptions = useSelector((state) => state.sortOptions)

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    dispatch(setActivity(response.data))
  }

  const addNewActivity = async () => {
    const activity = createActivity()
    await doPost('/activity-groups', activity)
    await syncActivity()
  }

  const showForm = () =>
    dispatch(
      setModalForm({
        isOpen: true,
        titleForm: 'Tambah List Item',
        priority: 'Very High'
      })
    )

  const showSortOpt = () => {
    dispatch(setSortOption({ isOpen: !sortOptions.isOpen }))
  }

  if (pathname === '/') {
    return (
      <Button data-cy='activity-add-button' onclick={addNewActivity}>
        <Icon.PlusIcon />
        <span className='sr-only sm:not-sr-only'>Tambah</span>
      </Button>
    )
  }

  return (
    <div className='flex items-center space-x-2 md:scroll-px-3'>
      <Button data-cy='todo-sort-button' className='relative border aspect-square' onclick={showSortOpt}>
        <Icon.SortIcon />
        <span className='sr-only'>Sort Item</span>
      </Button>

      <div className='relative'>{sortOptions.isOpen && <SortList />}</div>
      <Button data-cy='todo-add-button' onclick={showForm}>
        <Icon.PlusIcon />
        <span className='sr-only sm:not-sr-only'>Tambah</span>
      </Button>
    </div>
  )
}

export default ButtonMain
