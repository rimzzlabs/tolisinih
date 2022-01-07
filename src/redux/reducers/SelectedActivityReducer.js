import { SET_SELECTED_ACTIVITY } from '../constant/action-types'

const initialState = {
  title: null,
  todo_items: []
}

export const selectedActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ACTIVITY:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
