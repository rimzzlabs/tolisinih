import { selectedActivityReducer } from './SelectedActivityReducer'
import { activityReducer } from './activityReducer'
import { modalAlertReducer } from './modalAlertReducer'
import { modalFormReducer } from './modalFormReducer'
import { sortOptionReducer } from './sortOptionReducer'
import { titleReducer } from './titleReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  activity: activityReducer,
  modalAlert: modalAlertReducer,
  selectedActivity: selectedActivityReducer,
  modalForm: modalFormReducer,
  titleActivity: titleReducer,
  sortOptions: sortOptionReducer
})

export default rootReducer
