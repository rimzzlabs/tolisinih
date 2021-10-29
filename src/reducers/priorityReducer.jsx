export default function priorityReducer(state, action) {
  switch (action.type) {
    case 'SHOW':
      return {
        chevronUp: !state.chevronUp,
        dropdownShow: !state.dropdownShow,
      }
    default:
      return {
        chevronUp: true,
        dropdownShow: false,
      }
  }
}
