import * as types from './actionTypes'
import {setNumberOfAjaxCalls} from './uiActions'
import {fetchGifData} from '../services'
import {GIPHY_API_KEY, urls, defalutQuery} from '../constants/config'

export const updateSelectedGifs = (selectedGif) => ({
  type: types.UPDATE_SELECTED_GIFS,
  payload: selectedGif
})

const loadGifDataSuccess = (data) => ({
  type: types.LOAD_GIF_DATA_SUCCESS,
  payload: data
})

export const loadGifData = (searchQuery = defalutQuery) => (dispatch) => {
  searchQuery = searchQuery === '' ? defalutQuery : searchQuery
  const url = `${urls.giphySearch}?api_key=${GIPHY_API_KEY}&q=${searchQuery}`

  return new Promise((resolve, reject) => {
    dispatch(setNumberOfAjaxCalls(1))
    fetchGifData(url)
    .then((data) => {
      dispatch(loadGifDataSuccess(data.data))
      dispatch(setNumberOfAjaxCalls(-1))
      resolve()
    })
    .catch((error) => {
      dispatch(setNumberOfAjaxCalls(-1))
      reject(error)
    })
  })
}
