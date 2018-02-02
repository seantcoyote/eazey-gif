import * as types from './actionTypes'
import * as actions from './gifActions'

describe('gifActions', () => {
  test('updateSelectedGifs creates a UPDATE_SELECTED_GIFS action', () => {
    expect(actions.updateSelectedGifs({})).toEqual({
      type: types.UPDATE_SELECTED_GIFS,
      payload: {}
    })
  })

  test('loadGifDataSuccess creates a LOAD_GIF_DATA_SUCCESS action', () => {
    expect(actions.loadGifDataSuccess({})).toEqual({
      type: types.LOAD_GIF_DATA_SUCCESS,
      payload: {}
    })
  })
})
