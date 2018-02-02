import * as types from './actionTypes'
import {setNumberOfAjaxCalls} from './uiActions'
import urls from '../constants/urls'
import {fetchGifData} from '../services/fetchGifData'
import {GIPHY_API_KEY, giphyUrl, defalutQuery} from '../constants/config'

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
  const giphyUrl = `${urls.giphy}?api_key=${GIPHY_API_KEY}&q=${searchQuery}`

  return new Promise((resolve, reject) => {
    dispatch(setNumberOfAjaxCalls(1))
    fetchGifData(giphyUrl)
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
