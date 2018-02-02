import {combineReducers} from 'redux'
import {entitiesReducer, queriesReducer, errorsReducer} from 'redux-query'
import data from './dataReducer.js'
import ui from './uiReducer.js'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
  errors: errorsReducer,
  data,
  ui
})

export default rootReducer
