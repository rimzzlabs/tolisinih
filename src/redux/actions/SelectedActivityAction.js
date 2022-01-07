import { SET_SELECTED_ACTIVITY } from '../constant/action-types'

export const setSelectedActivity = (selectedActivityPayload) => ({
  type: SET_SELECTED_ACTIVITY,
  payload: selectedActivityPayload
})
