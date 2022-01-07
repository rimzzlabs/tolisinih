import { SET_MODAL_FORM } from '../constant/action-types'

const initialState = {
  isOpen: false,
  isSubmited: false,
  titleForm: '',
  title: '',
  priority: 'Very High',
  isDropDownOpen: false,
  is_active: false
}

export const modalFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_FORM:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
