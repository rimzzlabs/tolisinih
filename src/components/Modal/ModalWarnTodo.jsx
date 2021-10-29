import { Konteks } from '@/hooks/Context'
import { memo, useContext } from 'react'
import { BiError } from 'react-icons/bi'

function ModalWarnTodo() {
  const { removeTodos, modalState, handleModal } = useContext(Konteks)

  const btnS = 'flex items-center justify-center w-40 h-12 lg:h-14 rounded-full font-semibold'

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='flex flex-col items-center w-[30rem] h-80 lg:h-[24rem] rounded-md bg-white'>
      <div className='flex items-center justify-center w-full h-full'>
        <span className='text-6xl lg:text-8xl text-indicator-red'>
          <BiError data-cy='modal-delete-icon' />
        </span>
      </div>
      <div className='flex items-center justify-center w-full h-1/2'>
        <h3 data-cy='modal-delete-title' className='lg:text-base text-center px-12 text-fontColor-900'>
          Apakah anda yakin ingin menghapus Item <strong>&quot;{modalState.message}&quot;</strong>?
        </h3>
      </div>
      <div className='flex items-center justify-center space-x-2 lg:space-x-3 w-full h-4/5'>
        <button
          data-cy='modal-delete-cancel-button'
          onClick={handleModal}
          className={`${btnS} bg-gray-200 text-fontColor-900`}>
          Batal
        </button>
        <button
          data-cy='modal-delete-confirm-button'
          onClick={() => removeTodos(modalState.id)}
          className={`${btnS} bg-indicator-red text-white`}>
          Hapus
        </button>
      </div>
    </div>
  )
}

export default memo(ModalWarnTodo)
