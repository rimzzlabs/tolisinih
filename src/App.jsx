import Layout from '@/layouts'
import { setModalAlert } from '@/redux/actions/ModalAlertAction'
import { setModalForm } from '@/redux/actions/ModalFormAction'
import MyRoutes from '@/routes'

import { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ModalAlert = lazy(() => import('@/components/mollecules/modals/ModalAlert'))
const ModalInfo = lazy(() => import('@/components/mollecules/modals/ModalInfo'))
const ModalLayout = lazy(() => import('@/layouts/ModalLayout'))
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
        <MyRoutes />
      </Layout>

      <Suspense fallback={null}>
        {modalAlert.isOpen && (
          <ModalLayout onClick={closeModal}>
            {!modalAlert.isDeleteComplete ? <ModalAlert /> : <ModalInfo type={modalAlert.type} />}
          </ModalLayout>
        )}

        {modalForm.isOpen && (
          <ModalLayout onClick={closeModal}>
            <ModalForm />
          </ModalLayout>
        )}
      </Suspense>
    </>
  )
}
