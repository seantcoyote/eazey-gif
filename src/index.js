import './assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'
import {loadGifData} from './actions/gifActions'

const store = configureStore(initialState)
store.dispatch(loadGifData())

const YellowmanCan = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<YellowmanCan />, document.getElementById('root'))
registerServiceWorker()
