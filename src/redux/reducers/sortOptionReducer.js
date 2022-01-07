import { SET_NEWER, SET_SORT } from '../constant/action-types'

const initialState = {
  isOpen: false,
  sortBy: SET_NEWER
}

export const sortOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
