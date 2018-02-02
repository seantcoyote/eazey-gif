import * as types from './actionTypes'
import * as actions from './uiActions'

describe('uiActions', () => {
  test('updateSearchQuery creates an UPDATE_SEACH_QUERY action', () => {
    expect(actions.updateSearchQuery('eazey goes it')).toEqual({
      type: types.UPDATE_SEACH_QUERY,
      payload: 'eazey goes it'
    })
  })
  test('setLoadError creates a SET_LOAD_ERROR action', () => {
    expect(actions.setLoadError(true)).toEqual({
      type: types.SET_LOAD_ERROR,
      payload: true
    })
  })
  test('updateNumberOfAjaxCalls creates an UPDATE_NUMBER_OF_AJAX_CALLS action', () => {
    expect(actions.updateNumberOfAjaxCalls(1)).toEqual({
      type: types.UPDATE_NUMBER_OF_AJAX_CALLS,
      payload: 1
    })
  })
})
