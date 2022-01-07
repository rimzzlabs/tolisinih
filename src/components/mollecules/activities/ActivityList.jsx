import { createActivity } from '@/libs/createActivity'
import { doGet, doPost } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'

import { ActivityCard } from './ActivityCard'

import clsx from 'clsx'
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Figures = lazy(() => import('@/components/Figures'))

const ActivityList = () => {
  const activity = useSelector((state) => state.activity.activity)
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    dispatch(setActivity(response.data))
  }

  const addNewActivity = async () => {
    const activity = createActivity()
    const response = await doPost('/activity-groups', activity)
    await syncActivity()
    return response.data
  }

  if (activity.length > 0) {
    return (
      <div className={clsx('grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4', 'gap-4 md:gap-8 flex-[1_1_auto]')}>
        {activity.map((item) => (
          <ActivityCard {...item} key={item.id} />
        ))}
      </div>
    )
  }

  return (
    <Suspense fallback={null}>
      <Figures
        dataCy='activity-empty-state'
        onclick={addNewActivity}
        src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_wJFQLMWOpxN.svg?updatedAt=1635360519343'
      />
    </Suspense>
  )
}

export default ActivityList
