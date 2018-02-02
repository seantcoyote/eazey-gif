import * as types from './actionTypes'
import * as actions from './uiActions'

describe('uiActions', () => {
  test('updateNumberOfAjaxCalls creates an UPDATE_NUMBER_OF_AJAX_CALLS action', () => {
    expect(actions.updateNumberOfAjaxCalls(true)).toEqual({
      type: types.UPDATE_NUMBER_OF_AJAX_CALLS,
      payload: true
    })
  })
})
