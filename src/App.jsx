import Layout from '@/components/layouts/'

import { setModalAlert } from '@/redux/actions/ModalAlertAction'
import { setModalForm } from '@/redux/actions/ModalFormAction'
import MyRoutes from '@/routes'

import { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ModalAlert = lazy(() => import('@/components/mollecules/modals/ModalAlert'))
const ModalInfo = lazy(() => import('@/components/mollecules/modals/ModalInfo'))
const ModalLayout = lazy(() => import('@/components/layouts/ModalLayout'))
const ModalForm = lazy(() => import('@/components/mollecules/modals/ModalForm'))

export default function App() {
  const modalAlert = useSelector((state) => state.modalAlert)
  const modalForm = useSelector((state) => state.modalForm)
  const dispatch = useDispatch()
  const closeModal = () => {
    if (modalAlert.isOpen) {
      dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }))
    } else {
      dispatch(setModalForm({ isOpen: false, isSubmitted: false }))
    }
  }

  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <MyRoutes />
        </Suspense>
      </Layout>

      <Suspense fallback={null}>
        {modalAlert.isOpen && (
          <ModalLayout onClick={closeModal}>
            <Suspense fallback={null}>
              {!modalAlert.isDeleteComplete ? <ModalAlert /> : <ModalInfo type={modalAlert.type} />}
            </Suspense>
          </ModalLayout>
        )}

        {modalForm.isOpen && (
          <Suspense fallback={null}>
            <ModalLayout dataCy='todo-modal-delete' onClick={closeModal}>
              <Suspense fallback={null}>
                <ModalForm />
              </Suspense>
            </ModalLayout>
          </Suspense>
        )}
      </Suspense>
    </>
  )
}
