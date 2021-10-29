import { Konteks } from '@/hooks/Context'
import { memo, useCallback, useContext } from 'react'
import { BiChevronUp, BiX } from 'react-icons/bi'
import Priority from '../Dropdown/Priority'

function ModalForm() {
  const { formState, dispatchForm, priorityState, dispatchPriority, addTodos, updateTodo, modalState, handleModal } =
    useContext(Konteks)

  const handleAction = useCallback(() => {
    if (modalState.post) {
      if (!formState.title.length) return
      addTodos()
    } else {
      if (!formState.title.length) return
      const data = {
        title: formState.title,
        priority: formState.priority === 'Medium' ? 'normal' : formState.priority.replace(' ', '-').toLowerCase(),
        id: formState.id,
      }
      updateTodo(formState.id, data)
    }
  }, [addTodos, updateTodo, modalState])

  const color =
    formState.priority === 'very-high'
      ? 'bg-indicator-red'
      : formState.priority === 'high'
      ? 'bg-indicator-yellow'
      : formState.priority === 'normal'
      ? 'bg-indicator-green'
      : formState.priority === 'low'
      ? 'bg-indicator-blue'
      : 'bg-indicator-purple'

  const tempStr = formState.priority.split('-')
  for (var i = 0; i < tempStr.length; i++) {
    tempStr[i] = tempStr[i].charAt(0).toUpperCase() + tempStr[i].slice(1)
  }
  const prioritas = tempStr.join(' ')

  const priorities = [
    {
      id: 1,
      title: 'Very High',
    },
    {
      id: 2,
      title: 'High',
    },
    {
      id: 3,
      title: 'Medium',
    },
    {
      id: 4,
      title: 'Low',
    },
    {
      id: 5,
      title: 'Very Low',
    },
  ]

  return (
    <div
      data-cy='modal-add'
      onClick={(e) => e.stopPropagation()}
      className='flex flex-col justify-between w-[95%] sm:w-3/4 lg:w-[50rem] h-96 lg:h-[26rem] rounded-lg divide-y translate-y-[-40%] divide-gray-300 bg-white'>
      <div className='flex items-center justify-between w-full h-24 px-4 lg:px-8'>
        <div data-cy='modal-add-title' className='text-xl font-semibold text-fontColor-900'>
          {formState.post ? 'Tambah List Item' : 'Edit Item'}
        </div>
        <button data-cy='modal-add-close-button' onClick={handleModal} className='text-4xl text-gray-400'>
          <BiX />
        </button>
      </div>
      <div className='flex flex-col justify-evenly w-full h-[80%] py-2 lg:py-4 px-4 lg:px-8 space-y-2 lg:space-y-4'>
        <div>
          <label
            data-cy='modal-add-name-title'
            htmlFor='item-name'
            className='text-xs font-bold tracking-wider uppercase text-gray-900'>
            NAMA LIST ITEM
          </label>
          <input
            data-cy='modal-add-name-input'
            id='item-name'
            autoFocus
            value={formState.title}
            onChange={(e) => {
              if (formState.post) {
                dispatchForm({ type: 'TODOS', title: e.target.value, priority: formState.priority })
              } else {
                dispatchForm({ type: 'EDIT_TODOS', title: e.target.value, priority: formState.priority, id: formState.id })
              }
            }}
            onKeyDown={(e) => (e.key === 'Enter' ? handleAction() : null)}
            placeholder='Tambahkan nama list item'
            className='block w-full h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-gray-400 focus:border-primary-500'
          />
        </div>
        <div>
          <div data-cy='modal-add-priority-title' className='text-xs font-bold tracking-wider uppercase text-gray-900'>
            PRIORITY
          </div>
          <button
            data-cy='modal-add-priority-dropdown'
            onClick={() => dispatchPriority({ type: 'SHOW' })}
            className='flex items-center justify-between mt-2 lg:mt-4 px-4 lg:px-6 w-40 lg:w-48 h-12 lg:h-14 rounded-md transition outline-none border border-gray-400 hover:border-primary-500 focus:border-primary-500'>
            <span className={`w-3 h-3 rounded-full ${color}`}></span>

            <span className='font-semibold text-fontColor-900'>{prioritas === 'Normal' ? 'Medium' : prioritas}</span>

            <span className={`text-xl transition ${priorityState.chevronUp ? 'rotate-180' : 'rotate-0'}`}>
              <BiChevronUp />
            </span>
          </button>
          <div
            className={`${
              priorityState.dropdownShow ? 'flex flex-col items-stretch justify-between' : 'hidden'
            } absolute w-40 lg:w-48 h-72 rounded-lg border divide-y divide-gray-300 bg-white`}>
            {priorities.map((v) => (
              <Priority {...v} key={v.id} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end w-full h-24 px-4 lg:px-8'>
        <button
          data-cy='modal-add-save-button'
          disabled={formState.title.length ? false : true}
          onClick={handleAction}
          className={`flex items-center justify-center w-32 lg:w-36 h-12 lg:h-14 font-semibold rounded-full bg-primary-500 text-white ${
            formState.title.length ? '' : 'opacity-50 cursor-default'
          }`}>
          Simpan
        </button>
      </div>
    </div>
  )
}

export default memo(ModalForm)
