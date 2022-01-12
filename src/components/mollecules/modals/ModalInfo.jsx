import Info from '@/components/atoms/icons/Info'

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
      <Info data-cy='modal-information-icon' />
      <p data-cy='modal-information-title' className='font-semibold'>
        {type} Berhasil dihapus
      </p>
    </div>
  )
}

export default memo(ModalInfo)
