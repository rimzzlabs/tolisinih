export default function itemIdReducer(state, action) {
  if (!action) throw new Error('Please provide an object with the value needed for useReducer')
  switch (action.type) {
    case 'ACTIVITY':
      return action.payload
    case 'TODOS':
      return action.payload
    default:
      return null
  }
}
