import ReactDOM from 'react-dom'
import Provider from '@/hooks/Context'
import App from '@/App'
import { BrowserRouter as Router } from 'react-router-dom'
import '@/styles/globals.css'

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('__app'),
)
