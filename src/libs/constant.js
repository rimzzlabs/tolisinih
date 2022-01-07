import { SET_AZ, SET_INCOMPLETED, SET_NEWER, SET_OLDER, SET_ZA } from '@/redux/constant/action-types'

export const indicatorList = [
  {
    id: 1,
    title: 'Very High'
  },
  {
    id: 2,
    title: 'High'
  },
  {
    id: 3,
    title: 'Medium'
  },
  {
    id: 4,
    title: 'Low'
  },
  {
    id: 5,
    title: 'Very Low'
  }
]

export const sortList = [
  {
    title: 'Terbaru',
    type: SET_NEWER
  },
  {
    title: 'Terlama',
    type: SET_OLDER
  },
  {
    title: 'A-Z',
    type: SET_AZ
  },
  {
    title: 'Z-A',
    type: SET_ZA
  },
  {
    title: 'Belum Selesai',
    type: SET_INCOMPLETED
  }
]
