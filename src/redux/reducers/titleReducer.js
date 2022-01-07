import { SET_TITLE } from '../constant/action-types'

const initialState = {
  title: null,
  isEditing: false
}

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
