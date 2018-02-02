import './assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'
// import firebaseConfig from './firebaseConfig'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NewAppContainer from './containers/NewAppContainer'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'
import registerServiceWorker from './registerServiceWorker'

// firebase.initializeApp(firebaseConfig)

const store = configureStore(initialState)

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Route path="/" component={NewAppContainer} />
      </Router>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
