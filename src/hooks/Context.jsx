import { createContext, useReducer, useState } from 'react'
import { deleteActivity, deleteTodos, getActivity, getTodos, patchTodos, postActivity, postTodos } from '@/services/fetcher'
import modalReducer from '@/reducers/modalReducer'
import formReducer from '@/reducers/formReducer'
import priorityReducer from '@/reducers/priorityReducer'
import titleReducer from '@/reducers/titleReducer'
import sortReducer from '@/reducers/sortReducer'

export const Konteks = createContext()

const initialModalState = {
  backdrop: false,
  modalForm: false,
  modal: false,
  toastInfo: false,
  message: '',
  id: '',
  path: null,
}

const initialformState = {
  id: '',
  title: '',
  priority: 'very-high',
  email: null,
}

const initialPriorityState = {
  chevronUp: true,
  dropdownShow: false,
}

const initialTitleState = {
  heading: false,
  isEdit: true,
  title: '',
}

const initialSort = {
  isOpen: false,
  title: 'Terbaru',
}

export default function Provider({ children }) {
  const [postingTodos, setPostingTodos] = useState(false)
  const [activy, setActivy] = useState([])
  const [todos, setTodos] = useState([])
  const [slug, setSlug] = useState(null)

  const [modalState, dispatchModal] = useReducer(modalReducer, initialModalState)
  const [formState, dispatchForm] = useReducer(formReducer, initialformState)
  const [priorityState, dispatchPriority] = useReducer(priorityReducer, initialPriorityState)
  const [titleActivity, dispatchTitle] = useReducer(titleReducer, initialTitleState)
  const [dropdown, dispatchDropdown] = useReducer(sortReducer, initialSort)

  function handleModal(e) {
    e.stopPropagation()
    dispatchModal({ type: 'any' })
    dispatchModal({ type: 'CANCEL_DELETE' })
    dispatchPriority({ type: 'any' })
  }

  function sortTodos(action) {
    switch (action.type) {
      case 'Terbaru':
        return todos.sort((a, b) => b.id - a.id)
      case 'Terlama':
        return todos.sort((a, b) => a.id - b.id)
      case 'A-Z':
        return todos.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1))
      case 'Z-A':
        return todos.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1))
      case 'Belum Selesai':
        return todos.sort((a, b) => b.is_active - a.is_active)
      default:
        return todos
    }
  }

  function random(max = 1) {
    return Math.round(Math.random() * max)
  }

  async function syncActivivy() {
    const res = await getActivity('/activity-groups?email=rmaulana.citra@gmail.com')
    setActivy(res.res.data)
  }

  async function addNewActivity() {
    const data = {
      id: random(99999),
      title: 'New Activity',
      email: 'rmaulana.citra@gmail.com',
    }
    await postActivity(data)
    await syncActivivy()
  }

  async function removeActivity() {
    const res = await deleteActivity(modalState.id)
    await syncActivivy()
    return res.res
  }

  async function syncTodos() {
    if (slug === null) return
    const res = await getTodos(`/activity-groups/${slug}`)
    if (res.error) {
      setTodos([])
      return
    }
    setTodos(res.res.todo_items)
  }

  async function addTodos() {
    const data = {
      title: formState.title,
      priority: formState.priority,
      activity_group_id: modalState.id,
    }
    const res = await postTodos(data)
    await syncTodos()
    if (!res.error) dispatchModal({ type: 'FORM_SUCCESS' })
    return res.res
  }

  async function removeTodos() {
    const res = await deleteTodos(modalState.id)
    await syncTodos()
    if (!res.error) dispatchModal({ type: 'DELETE_SUCCESS', message: 'Item berhasil dihapus' })
  }

  async function checklistTodo(id, data) {
    await patchTodos(id, data)
    await syncTodos()
  }

  async function updateTodo(id, data) {
    const res = await patchTodos(id, data)
    await syncTodos()
    if (!res.error) dispatchModal({ type: 'FORM_EDIT_SUCCESS', message: 'update berhasil!' })
  }

  return (
    <Konteks.Provider
      value={{
        removeActivity,
        modalState,
        dispatchModal,
        handleModal,
        activy,
        setActivy,
        addNewActivity,
        todos,
        setTodos,
        formState,
        dispatchForm,
        priorityState,
        dispatchPriority,
        removeTodos,
        updateTodo,
        addTodos,
        checklistTodo,
        postingTodos,
        setPostingTodos,
        titleActivity,
        dispatchTitle,
        dropdown,
        dispatchDropdown,
        sortTodos,
        slug,
        setSlug,
        syncTodos,
      }}>
      {children}
    </Konteks.Provider>
  )
}
