import * as types from './actionTypes.js'

export const updateNumberOfAjaxCalls = (numberOfChange) => ({
  type: types.UPDATE_NUMBER_OF_AJAX_CALLS,
  payload: numberOfChange
})
