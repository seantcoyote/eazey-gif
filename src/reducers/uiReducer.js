import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function uiReducer (state = initialState.ui, action) {
  switch (action.type) {
    case types.SET_IS_DATA_READY:
      return {
        ...state,
        isDataReady: action.payload
      }

    case types.SET_DATA_LOADING_ERROR:
      return {
        ...state,
        dataLoadingError: action.payload
      }

    case types.UPDATE_NUMBER_OF_AJAX_CALLS:
      return {
        ...state,
        numberOfAjaxCalls: state.numberOfAjaxCalls + action.payload
      }

    default:
      return state
  }
}
