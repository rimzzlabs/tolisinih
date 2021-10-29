export default function titleReducer(state, action) {
  switch (action.type) {
    case 'STATIC':
      return {
        heading: true,
        autofocus: false,
        isEdit: false,
        title: action.title,
      }

    case 'EDIT':
      return {
        heading: false,
        autofocus: true,
        isEdit: true,
        title: action.title,
      }

    case 'POST':
      return {
        heading: true,
        autofocus: false,
        isEdit: false,
        title: action.title,
      }

    default:
      return {
        heading: true,
        autofocus: false,
        isEdit: false,
        title: '',
      }
  }
}
