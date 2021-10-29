export default function sortReducer(state, action) {
  switch (action.type) {
    case 'OPEN':
      return {
        isOpen: action.isOpen,
        title: state.title,
      }
    case 'CLOSE':
      return {
        isOpen: false,
        title: action.title,
      }
    case 'CLOSED':
      return {
        isOpen: false,
        title: '',
      }

    default:
      return state
  }
}
