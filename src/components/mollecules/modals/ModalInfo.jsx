import { memo } from 'react'

/**
 * a modal that will display information if the data deleted succesfully
 * @param {{type: string}} param0 this component accept a type prop that will be used to render the component
 * @returns {JSX.Element}
 */
const ModalInfo = ({ type }) => {
  return (
    <div
      data-cy='modal-information'
      onClick={(e) => e.stopPropagation()}
      className='inline-flex items-center py-3.5 md:py-4 px-6 md:px-8 rounded-lg space-x-1 md:space-x-2 bg-white'
    >
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        data-cy='modal-information-icon'
        className='text-green-500'
        height='1.5rem'
        width='1.5rem'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z'></path>
        <path d='M11 11H13V17H11zM11 7H13V9H11z'></path>
      </svg>
      <p data-cy='modal-information-title' className='font-semibold'>
        {type} Berhasil dihapus
      </p>
    </div>
  )
}

export default memo(ModalInfo)
