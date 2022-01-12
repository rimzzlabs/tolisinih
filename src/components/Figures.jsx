import { memo } from 'react'

/**
 * figure component that will display an image when the data is empty
 * @param {{ onClick: () => any src: string; "data-cy": string;}} param0 src prop of the image that would be rendered, this is required
 * @returns
 */
const Figures = ({ onClick = () => null, ...props }) => (
  <figure onClick={onClick} className='w-1/2 mx-auto cursor-pointer'>
    <img className='w-full object-contain aspect-square' alt='activity' {...props} />
  </figure>
)

export default memo(Figures)
