import {combineReducers} from 'redux'
import gifs from './gifsReducer.js'
import ui from './uiReducer.js'

const rootReducer = combineReducers({
  gifs,
  ui
})

export default rootReducer
