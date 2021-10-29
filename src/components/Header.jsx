import { memo } from 'react'
import Container from './Container'

function Header() {
  return (
    <div className='bg-primary-500'>
      <Container Data='header-background' Main>
        <h2 data-cy='header-title' className='text-lg lg:text-2xl font-bold uppercase tracking-wide text-white'>
          TO DO LIST APP
        </h2>
      </Container>
    </div>
  )
}
export default memo(Header)
