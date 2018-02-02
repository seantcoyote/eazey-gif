import * as types from './actionTypes'
import * as actions from './dataActions'

describe('dataActions', () => {
  test('loadDataSuccess creates a LOAD_DATA_SUCCESS action', () => {
    expect(actions.loadDataSuccess({})).toEqual({
      type: types.LOAD_DATA_SUCCESS,
      payload: {}
    })
  })
})
