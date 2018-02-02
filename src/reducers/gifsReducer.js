import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function gifsReducer (state = initialState.gifs, action) {
  switch (action.type) {
    case types.LOAD_GIF_DATA_SUCCESS:
      return {
        ...state,
        searchResultGifs: action.payload
      }

    default:
      return state
  }
}
