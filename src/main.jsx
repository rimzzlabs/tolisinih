import App from '@/App'
import '@/index.css'
import store from '@/redux/store'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const ROOT = document.getElementById('__app')
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  ROOT
)
