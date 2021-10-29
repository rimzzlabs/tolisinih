import { Switch, Route } from 'react-router-dom'
import { lazy, Suspense, useCallback, useContext } from 'react'
import { Konteks } from './hooks/Context'
import Container from '@/components/Container'

const Home = lazy(() => import('@/pages/Home'))
const Detail = lazy(() => import('@/pages/Detail'))
const Info = lazy(() => import('@/components/Toast/Info'))
const ModalWarn = lazy(() => import('@/components/Modal/ModalWarn'))
const ModalWarnTodo = lazy(() => import('@/components/Modal/ModalWarnTodo'))
const ModalForm = lazy(() => import('@/components/Modal/ModalForm'))
const Header = lazy(() => import('@/components/Header'))

export default function App() {
  const { modalState, dispatchModal, dispatchForm, dispatchPriority } = useContext(Konteks)
  const handleClose = useCallback(() => {
    dispatchModal({ type: 'any' })
    dispatchForm({ type: 'any' })
    dispatchPriority({ type: 'any' })
  }, [dispatchModal, dispatchForm, dispatchPriority])

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Container Main>
        <Switch>
          <Suspense fallback={null}>
            <Route exact path='/' component={Home} />
            <Route path='/detail/:id' component={Detail} />
          </Suspense>
        </Switch>
      </Container>
      {modalState.backdrop && (
        <div onClick={handleClose} className='w-screen h-screen fixed left-0 top-0 bg-gray-900/30'>
          <Suspense fallback={null}>
            {modalState.modal && (
              <div data-cy='modal-delete' className='w-full h-full flex items-center justify-center '>
                <ModalWarn />
              </div>
            )}
            {modalState.modalTodo && (
              <div data-cy='modal-delete' className='w-full h-full flex items-center justify-center'>
                <ModalWarnTodo />
              </div>
            )}
            {modalState.toastInfo && (
              <div data-cy='modal-information' className='w-full h-full flex items-center justify-center'>
                <Info message={modalState.message} />
              </div>
            )}
            {modalState.modalForm && (
              <div data-cy='modal-add' className='w-full h-full flex items-center justify-center'>
                <ModalForm />
              </div>
            )}
          </Suspense>
        </div>
      )}
    </>
  )
}
