import { SET_ACTIVITY } from '../constant/action-types'

export const setActivity = (activityPayload) => ({
  type: SET_ACTIVITY,
  payload: activityPayload
})
