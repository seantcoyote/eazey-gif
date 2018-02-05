import './assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'
import {loadGifData} from './actions/gifActions'

const store = configureStore(initialState)
store.dispatch(loadGifData())

const EazeyGifDecarboxylator = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

ReactDOM.render(<EazeyGifDecarboxylator />, document.getElementById('root'))
registerServiceWorker()
