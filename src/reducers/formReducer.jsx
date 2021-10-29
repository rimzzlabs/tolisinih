export default function formReducer(state, action) {
  switch (action.type) {
    case 'TODOS':
      return {
        title: action.title,
        priority: action.priority === 'Medium' ? 'normal' : action.priority.toLowerCase().replace(' ', '-'),
        email: action.email,
        post: true,
      }

    case 'EDIT_TODOS':
      return {
        id: action.id,
        title: action.title,
        priority: action.priority === 'Medium' ? 'normal' : action.priority.toLowerCase().replace(' ', '-'),
        is_active: action.is_active,
        post: false,
      }

    case 'ACTIVITY':
      return {
        id: action.id,
        title: action.title,
        email: action.email,
      }

    default:
      return {
        id: null,
        title: '',
        priority: 'very-high',
        post: null,
        email: null,
      }
  }
}
