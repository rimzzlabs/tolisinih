import ActivityList from '@/components/mollecules/activities/ActivityList'

import { doGet } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'

import { memo, useEffect } from 'react'
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
    <div className='w-full'>
      <ActivityList />
    </div>
  )
}

export default memo(IndexPage)
