import {getLocalStorage} from './localStorage'

export const getData = (url, id, jwt) => {
  return new Promise((resolve, reject) => {
    // TODO: update to use fetch

    let req = new XMLHttpRequest()
    req.onload = () => {
      if (req.status === 200) {
        let data = JSON.parse(req.response)
        resolve(data)
      } else {
        reject(Error("Failed to fetch data due to server error: " + req.status))
      }
    }
    req.onerror = () => {
      reject(Error("Failed to fetch data due to network error."))
    }
    req.open("GET", `${url}?id=${id}&jwt=${jwt}`)
    req.send()
  })
}

export const isDataCurrnet = (id) => (Date.now() < getLocalStorage(`dataId:${id}/myData/lastLoaded`) + 3600000) // 1 hr
