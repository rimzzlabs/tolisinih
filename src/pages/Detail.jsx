import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { BiChevronLeft, BiPencil, BiPlus, BiSort, BiSortDown, BiSortUp, BiSortAZ, BiSortZA } from 'react-icons/bi'
import { getActivity, patchActivity } from '@/services/fetcher'
import { Konteks } from '@/hooks/Context'
import { Link } from 'react-router-dom'
import Container from '@/components/Container'

const sortItems = [
  {
    title: 'Terbaru',
    icon: <BiSortUp />,
  },
  {
    title: 'Terlama',
    icon: <BiSortDown />,
  },
  {
    title: 'A-Z',
    icon: <BiSortAZ />,
  },
  {
    title: 'Z-A',
    icon: <BiSortZA />,
  },
  {
    title: 'Belum Selesai',
    icon: <BiSort />,
  },
]

const SortItem = lazy(() => import('@/components/Dropdown/SortItem'))
const Todo = lazy(() => import('@/components/Todo'))

export default function Detail({ match }) {
  const { todos, setTodos, dispatchModal, dispatchForm, titleActivity, dispatchTitle, dropdown, dispatchDropdown, setSlug } =
    useContext(Konteks)
  const id = match.params.id
  const [, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function sync() {
      const res = await getActivity(`/activity-groups/${id}`)
      dispatchTitle({ type: 'POST', title: res.res.title })
      const slug = localStorage.getItem('slug')
      setSlug(slug)
      if (res.error) {
        setTodos([])
        return
      }
      setTodos(res.res.todo_items)
    }
    sync()

    return () => setLoading(false)
  }, [])

  return (
    <>
      <div className='my-8 lg:my-12'>
        <Container Main className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <Link
              onClick={() => {
                dispatchDropdown({ type: 'CLOSED' })
              }}
              data-cy='todo-back-button'
              to='/'>
              <BiChevronLeft className='text-2xl lg:text-4xl text-fontColor-900' />
            </Link>
            {titleActivity.heading && (
              <h1
                onClick={() => {
                  dispatchDropdown({ type: 'CLOSED' })
                  dispatchTitle({ type: 'EDIT', title: titleActivity.title })
                }}
                data-cy='todo-title'
                className='text-2xl lg:text-4xl font-bold text-fontColor-900'>
                {titleActivity.title}
              </h1>
            )}
            {titleActivity.isEdit && (
              <input
                onBlur={() => {
                  dispatchTitle({ type: 'POST', title: titleActivity.title })
                  patchActivity(id, {
                    title: titleActivity.title,
                  })
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    dispatchTitle({ type: 'POST', title: titleActivity.title })
                    patchActivity(id, {
                      title: titleActivity.title,
                    })
                  }
                }}
                autoFocus={true}
                value={titleActivity.title}
                onChange={(e) => dispatchTitle({ type: 'EDIT', title: e.target.value })}
                className='block w-96 h-12 lg:h-14 border-b-2  text-2xl lg:text-4xl font-bold border-gray-600 bg-transparent outline-none text-fontColor-900'
              />
            )}
            <BiPencil
              onClick={() => {
                dispatchDropdown({ type: 'CLOSED' })
                if (titleActivity.isEdit) {
                  patchActivity(id, {
                    title: titleActivity.title,
                  })
                } else {
                  dispatchTitle({ type: 'EDIT', title: titleActivity.title })
                }
              }}
              data-cy='todo-title-edit-button'
              className='text-xl lg:text-2xl text-gray-400'
            />
          </div>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div>
              <button
                onClick={() => {
                  dispatchDropdown({ type: 'OPEN', isOpen: !dropdown.isOpen, title: dropdown.title })
                }}
                data-cy='todo-sort-button'
                className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full cursor-pointer border border-gray-300 text-gray-400'>
                <BiSort />
              </button>

              <div className='relative z-50'>
                <Suspense fallback={null}>
                  {dropdown.isOpen && (
                    <div className='absolute top-2 -left-40 sm:-left-8 w-56 h-56'>
                      <div
                        data-cy='sort-parent'
                        className='w-full h-full flex flex-col items-stretch justify-between rounded-lg divide-y border bg-white'>
                        {sortItems.map((data, i) => (
                          <SortItem key={i} {...data} />
                        ))}
                      </div>
                    </div>
                  )}
                </Suspense>
              </div>
            </div>

            <button
              data-cy='todo-add-button'
              onClick={() => {
                dispatchDropdown({ type: 'CLOSED' })
                dispatchForm({ type: 'TODOS', id, title: '', priority: 'Very High', email: 'rmaulana.citra@gmail.com' })
                dispatchModal({ type: 'SHOW_FORM', id })
              }}
              className='flex items-center justify-center space-x-1 w-32 lg:w-36 h-10 lg:h-12 text-lg lg:text-xl font-semibold rounded-full outline-none bg-primary-500 text-white'>
              <span>
                <BiPlus />
              </span>
              <span>Tambah</span>
            </button>
          </div>
        </Container>
      </div>

      <Suspense fallback={null}>
        <div className='w-full py-4 sm:py-6 lg:py-10'>
          {todos ? (
            todos.length ? (
              <div className='flex flex-col items-stretch space-y-2 lg:space-y-4'>
                {todos.map((data) => {
                  return <Todo key={data.id} {...data} slug={id} />
                })}
              </div>
            ) : (
              <div className='flex items-center justify-center w-full h-96 mt-20'>
                <img
                  onClick={() => {
                    dispatchForm({ type: 'TODOS', id, title: '', priority: 'Very High', email: 'rmaulana.citra@gmail.com' })
                    dispatchModal({ type: 'SHOW_FORM', id })
                  }}
                  data-cy='todo-empty-state'
                  src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_PoDEwMe5H.svg?updatedAt=1635360520167'
                  className='w-3/4 lg:w-1/2 cursor-pointer z-0'
                />
              </div>
            )
          ) : null}
        </div>
      </Suspense>
    </>
  )
}
