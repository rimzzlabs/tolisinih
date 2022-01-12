import { doGet } from '@/libs/doFetch'
import { setSelectedActivity } from '@/redux/actions/selectedActivityAction'
import { setSortOption } from '@/redux/actions/sortOptionsAction'
import { SET_NEWER } from '@/redux/constant/action-types'

import { Suspense, lazy, memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const TodoList = lazy(() => import('@/components/mollecules/todos/TodoList'))

const DetailPage = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()

  const syncSelectedActivity = async () => {
    const response = await doGet(`/activity-groups/${slug}`)
    dispatch(setSelectedActivity(response))
  }

  useEffect(() => {
    syncSelectedActivity()

    return () => {
      dispatch(setSortOption({ sortBy: SET_NEWER, isOpen: false }))
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <TodoList />
    </Suspense>
  )
}

export default memo(DetailPage)
