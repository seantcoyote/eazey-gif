import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function (state = initialState.data, action) {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}
