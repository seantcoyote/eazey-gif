// Takes object with keys and values to be stored in localStorage
export const setLocalStorage = (data) => {
  try {
    Object.keys(data).map(key => {
      const serializedData = JSON.stringify(data[key])
      localStorage.setItem(key, serializedData)
    })
    return true
  } catch (error) {
    return error
  }
}

// If passed a key, returns value if exists, otherwise returns all data in localStorage
export const getLocalStorage = (key) => {
  try {
    if (key) { // Only get data for this key
      const serializedData = localStorage.getItem(key)
      if (!serializedData) {
        return new Error('This key does not exist in localStorage')
      }
      return JSON.parse(serializedData)
    } else { // Get all localStorage data
      return Object.keys(localStorage).reduce((acc, key) => {
        return {
          ...acc,
          [key]: localStorage.getItem(key)
        }
      }, {})
    }
  } catch (error) {
    return error
  }
}

// TODO: Add deleteLocalStorage()
