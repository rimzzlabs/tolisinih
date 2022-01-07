import { SET_MODAL_ALERT } from '../constant/action-types'

const initialState = {
  title: null,
  isOpen: false,
  isDeleteComplete: false,
  type: null,
  id: null
}

export const modalAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_ALERT:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
