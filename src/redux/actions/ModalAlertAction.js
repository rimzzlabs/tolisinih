import { SET_MODAL_ALERT } from '../constant/action-types'

/**
 * the action of setting the modal alert
 * @param {{title: string isOpen: boolean isDeleteComplete: boolean type: string id: number | string}} modalAlertPayload this param is the payload of the action, an object with the following properties:
 * @param {string} title the title of the modal alert
 * @param {boolean} modalAlertPayload.isOpen whether the modal alert is open or not
 * @param {boolean} modalAlertPayload.isDeleteComplete whether the modal alert is for delete complete or not
 * @param {string} modalAlertPayload.type the type of the modal alert should be activity or item
 * @param {number | string} modalAlertPayload.id the id of the activity or item
 * @returns
 */
export const setModalAlert = (modalAlertPayload) => ({
  type: SET_MODAL_ALERT,
  payload: modalAlertPayload
})
