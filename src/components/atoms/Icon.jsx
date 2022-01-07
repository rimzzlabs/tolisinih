import * as sort from '@/redux/constant/action-types'

import { memo } from 'react'

export const PlusIcon = memo(() => (
  <svg
    className='h-6 w-6'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='8' x2='12' y2='16' />

    <line x1='8' y1='12' x2='16' y2='12' />
  </svg>
))

PlusIcon.displayName = 'PlusIcon'

export const PencilIcon = memo(() => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 24 24'
    data-cy='todo-title-edit-button'
    className='text-xl lg:text-2xl text-gray-400'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path fill='none' d='M16.589 9L15.003 7.414 5.906 16.511 5.377 18.625 7.491 18.097z'></path>
    <path transform='rotate(134.999 18.003 6)' fill='none' d='M16.882 4.879H19.125V7.122H16.882z'></path>
    <path d='M4.003,21c0.081,0,0.162-0.01,0.242-0.03l4-1c0.176-0.044,0.337-0.135,0.465-0.263L21.003,7.414 c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414L19.417,3c-0.756-0.756-2.072-0.756-2.828,0L4.296,15.293 c-0.128,0.128-0.219,0.289-0.263,0.464l-1,4c-0.086,0.341,0.015,0.701,0.263,0.95C3.485,20.897,3.741,21,4.003,21z M18.003,4.414 L19.589,6l-1.586,1.586L16.417,6L18.003,4.414z M5.906,16.511l9.097-9.097L16.589,9l-9.098,9.097l-2.114,0.528L5.906,16.511z'></path>
  </svg>
))

PencilIcon.displayName = 'PencilIcon'

export const TrashIcon = memo(() => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 24 24'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z'></path>
  </svg>
))

TrashIcon.displayName = 'TrashIcon'

export const CheckIcon = memo(() => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='absolute right-4 h-4 w-4 md:w-6 md:h-6'
    data-cy='sort-selection-selected'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
  </svg>
))

CheckIcon.displayName = 'CheckIcon'

export const SortIcon = memo(({ type }) => {
  switch (type) {
    case sort.SET_NEWER:
      return (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11 9H20V11H11zM11 13H18V15H11zM11 5H22V7H11zM11 17H16V19H11zM5 20L7 20 7 8 10 8 6 4 2 8 5 8z'></path>
        </svg>
      )

    case sort.SET_OLDER:
      return (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 20L10 16 7 16 7 4 5 4 5 16 2 16zM11 8H20V10H11zM11 12H18V14H11zM11 4H22V6H11zM11 16H16V18H11z'></path>
        </svg>
      )

    case sort.SET_AZ:
      return (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM7 3.99L5 3.99 5 15.99 2 15.99 6 19.99 10 15.99 7 15.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z'></path>
        </svg>
      )

    case sort.SET_ZA:
      return (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM6 3.99L2 7.99 5 7.99 5 19.99 7 19.99 7 7.99 10 7.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z'></path>
        </svg>
      )

    case sort.SET_INCOMPLETED:
      return (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z'></path>
        </svg>
      )
    default:
      return (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z'></path>
        </svg>
      )
  }
})

SortIcon.displayName = 'SortIcon'

// export all above icons as default name of Icon
