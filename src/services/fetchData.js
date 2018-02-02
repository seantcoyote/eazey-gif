const checkFetchStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const fetchGifData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(checkFetchStatus)
    .then((response) => { resolve(response.json()) })
    .catch((error) => { reject(error) })
  })
}
