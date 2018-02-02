import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function uiReducer (state = initialState.ui, action) {
  switch (action.type) {
    case types.UPDATE_SEACH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      }

    case types.SET_LOAD_ERROR:
      return {
        ...state,
        loadError: action.payload
      }

    case types.SET_NUMBER_OF_AJAX_CALLS:
      const newNumber = state.numberOfAjaxCalls + action.payload
      return {
        ...state,
        numberOfAjaxCalls: newNumber
      }

    default:
      return state
  }
}
