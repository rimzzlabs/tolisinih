import { SET_ACTIVITY } from '../constant/action-types'

const initialState = {
  activity: []
}

/**
 * reducer for activitites, handle actions for adding activities
 * @param {{activity: Array<any>}} state the state of the list activity
 * @param {{type: string payload: any}} action the action to be dispatched to the state
 * @returns
 */
export const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activity: [...action.payload]
      }
    default:
      return state
  }
}
