export default function modalReducer(state, action) {
  switch (action.type) {
    case 'CONFIRM':
      return {
        backdrop: true,
        modal: true,
        modalForm: false,
        toastInfo: false,
        message: action.message,
        id: action.id,
        path: action.path,
        post: null,
      }
    case 'TODO_CONFIRM':
      return {
        backdrop: true,
        modal: false,
        modalTodo: true,
        modalForm: false,
        toastInfo: false,
        message: action.message,
        id: action.id,
        path: action.path,
        post: null,
      }
    case 'DELETE_SUCCESS':
      return {
        backdrop: true,
        modalForm: false,
        modal: false,
        toastInfo: true,
        message: action.message,
        id: '',
        path: null,
        post: null,
      }
    case 'DELETE_FAILED':
      return {
        backdrop: true,
        modalForm: false,
        modal: false,
        toastInfo: true,
        message: action.message,
        id: '',
        path: null,
        post: null,
      }
    case 'CONFIRM_SUCCESS':
      return {
        backdrop: false,
        modalForm: false,
        modal: false,
        toastInfo: false,
        message: '',
        id: '',
        path: null,
        post: null,
      }
    case 'CANCEL_DELETE':
      return {
        backdrop: false,
        modalForm: false,
        modal: false,
        toastInfo: false,
        message: '',
        id: '',
        path: null,
        post: null,
      }

    case 'SHOW_FORM':
      return {
        backdrop: true,
        modalForm: true,
        modal: false,
        toastInfo: false,
        message: '',
        id: action.id,
        path: null,
        post: true,
      }

    case 'EDIT_FORM':
      return {
        backdrop: true,
        modalForm: true,
        modal: false,
        toastInfo: false,
        message: '',
        id: action.id,
        path: null,
        post: false,
      }

    case 'CANCEL_FORM':
      return {
        backdrop: false,
        modalForm: false,
        modal: false,
        toastInfo: false,
        message: '',
        id: '',
        path: null,
        post: null,
      }

    case 'FORM_SUCCESS':
      return {
        backdrop: false,
        modalForm: false,
        modal: false,
        toastInfo: false,
        message: '',
        id: '',
        post: null,
      }

    case 'FORM_EDIT_SUCCESS':
      return {
        backdrop: true,
        modalForm: false,
        modal: false,
        toastInfo: true,
        message: action.message,
        id: '',
        post: null,
      }

    default:
      return {
        backdrop: false,
        modalForm: false,
        modal: false,
        toastInfo: false,
        message: 'Gagal!',
        id: '',
        path: null,
        post: null,
      }
  }
}
