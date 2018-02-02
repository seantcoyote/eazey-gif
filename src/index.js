import './assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './containers/App'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore(initialState)

const YellowmanCan = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<YellowmanCan />, document.getElementById('root'))
registerServiceWorker()
