import * as types from './actionTypes'

export const updateSearchQuery = (query) => ({
  type: types.UPDATE_SEACH_QUERY,
  payload: query
});

export const setLoadError = (isError) => ({
  type: types.SET_LOAD_ERROR,
  payload: isError
})

export const setNumberOfAjaxCalls = (change) => ({
  type: types.SET_NUMBER_OF_AJAX_CALLS,
  payload: change
})
