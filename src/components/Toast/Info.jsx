import { memo } from 'react'
import { BiInfoCircle } from 'react-icons/bi'

function Info({ message }) {
  return (
    <div
      data-cy='modal-information'
      className='flex items-center px-4 lg:px-6 space-x-2 w-96 h-14 lg:h-16 rounded-2xl bg-white'>
      <div>
        <BiInfoCircle data-cy='modal-information-icon' className='text-indicator-green text-2xl' />
      </div>
      <div>
        <div data-cy='modal-information-title' className='text-sm sm:text-base lg:text-lg font-semibold text-fontColor-900'>
          {message ? message : 'Berhasil!'}
        </div>
      </div>
    </div>
  )
}

export default memo(Info)
