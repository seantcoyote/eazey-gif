import * as types from './actionTypes.js'
import {updateNumberOfAjaxCalls} from './uiActions'
import {setLocalStorage, getLocalStorage} from '../services/localStorage'
import {getData, isDataCurrent} from '../services/data'

export const loadDataSuccess = (data) => ({
  type: types.LOAD_DATA_SUCCESS,
  payload: data
})

export const loadData = ({endpoint, id, jwt}) => (dispatch) => {
  return new Promise((resolve, reject) => {
    if (window.localStorage && localStorage[`dataId:${id}/myData`] && isDataCurrent(id)) {
      let data = getLocalStorage(`dataId:${id}/myData`)
      // Save to redux store
      dispatch(loadDataSuccess(data))
      resolve()
    } else {
      // 1) Update for loading... graphic
      dispatch(updateNumberOfAjaxCalls(1))

      // 2) Get questions from server
      getData(endpoint, id, jwt)
      .then((data) => {
        // 3) Save to localStorage if possible
        if (window.localStorage) {
          setLocalStorage({
            [`dataId:${id}/myData`]: data,
            [`dataId:${id}/myData/LastLoaded`]: Date.now()
          })
        }

        // 4) Save to redux store
        dispatch(loadDataSuccess(data))

        // 5) Update for loading... graphic
        dispatch(updateNumberOfAjaxCalls(-1))

        resolve()
      })
      .catch((error) => {
        dispatch(updateNumberOfAjaxCalls(-1))
        reject(error)
      })
    }
  })
}
