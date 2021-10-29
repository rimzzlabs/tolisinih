import { getActivity } from '@/services/fetcher'
import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { Konteks } from '@/hooks/Context'
import Container from '@/components/Container'

const Activity = lazy(() => import('@/components/Activity'))

export default function Home() {
  const { activy, setActivy, addNewActivity } = useContext(Konteks)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    async function syncData() {
      const res = await getActivity('/activity-groups?email=rmaulana.citra@gmail.com')
      setActivy(res.res.data)
    }
    syncData()

    return () => setLoading(true)
  }, [])
  return (
    <>
      <div data-cy='header-todo' className='my-8 lg:my-12'>
        <Container Main className='flex items-center justify-between'>
          <h1 data-cy='activity-title' className='text-2xl lg:text-4xl font-bold text-fontColor-900'>
            Activity
          </h1>
          <button
            data-cy='activity-add-button'
            disabled={loading}
            onClick={addNewActivity}
            className={`flex items-center justify-center space-x-1 w-32 lg:w-40 h-10 lg:h-12 text-lg lg:text-xl font-semibold rounded-full outline-none transition bg-primary-500 hover:bg-primary-500/50 text-white ${
              loading ? 'opacity-50 cursor-default' : ''
            }`}>
            <span>
              <BiPlus />
            </span>
            <span>Tambah</span>
          </button>
        </Container>
      </div>

      <div className='w-full'>
        {activy &&
          (activy.length ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 lg:gap-4 lg:gap-y-6 items-stretch justify-items-stretch w-full'>
              <Suspense fallback={null}>
                {activy.map((item, i) => (
                  <Activity key={i} {...item} />
                ))}
              </Suspense>
            </div>
          ) : (
            <div className='flex items-center justify-center w-full h-96 mt-20'>
              <img
                onClick={addNewActivity}
                data-cy='activity-empty-state'
                src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_wJFQLMWOpxN.svg?updatedAt=1635360519343'
                className='w-3/4 lg:w-1/2 cursor-pointer'
              />
            </div>
          ))}
      </div>
    </>
  )
}
