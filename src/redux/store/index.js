import rootReducer from '../reducers'

import { createStore } from 'redux'

/**
 * The store is the single source of truth for the application's state.
 * this would be use to store the state of the application.
 */
const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
