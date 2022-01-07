import { memo } from 'react'

/**
 * figure component that will display an image when the data is empty
 * @param {{src: string, onclick: () => any}} param0 src prop of the image that would be rendered, this is required
 * @returns
 */
const Figures = ({ src, onclick = () => null, dataCy = '' }) => (
  <figure onClick={onclick} data-cy={dataCy} className='w-1/2 mx-auto cursor-pointer'>
    <img src={src} className='w-full object-contain aspect-square' alt='activity' />
  </figure>
)

export default memo(Figures)
