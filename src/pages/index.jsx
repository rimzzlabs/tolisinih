import ActivityList from '@/components/mollecules/activities/ActivityList'

import { doGet } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'

import { Suspense, memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const IndexPage = () => {
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    dispatch(setActivity(response.data))
  }

  useEffect(() => {
    syncActivity()
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActivityList />
    </Suspense>
  )
}

export default memo(IndexPage)
