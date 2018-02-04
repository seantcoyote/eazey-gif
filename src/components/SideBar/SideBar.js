import React from 'react'
import {object, array, func, string} from 'prop-types'
import GifSwatch from '../GifSwatch'
import defaultStyles from './styles'

const renderSwatch = (selectedGifs, gif) => {
  const swatchProps = {
    id: gif.id,
    title: gif.title,
    thumbnail: gif.images,
  }
  const selectedIds = Object.keys(selectedGifs)
  const matches = selectedIds.filter((id) => id === gif.id)

  if (matches.length > 0) {
    return null
  }

  return (
    <div key={gif.id} style={{marginBottom: 10}}>
      <GifSwatch {...swatchProps} />
    </div>
  )
}

const SideBar = ({searchQuery, searchResultGifs, selectedGifs, handleSearchChange, styles}) => {
  const searchResults = searchResultGifs.length ?
    searchResultGifs.map(renderSwatch.bind(null, selectedGifs)) :
    <p>Whoa, there are no gifs for the term "{searchQuery}"! Maybe try "campfire"?</p>

  return (
    <aside style={{...defaultStyles.base, ...styles}}>
      <input
        style={defaultStyles.searchInput}
        placeholder="Search GIPHY"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div style={defaultStyles.searchResults}>
        {searchResults}
      </div>
    </aside>
  )
}

SideBar.propTypes = {
  styles: object,
  searchQuery: string,
  searchResultGifs: array.isRequired,
  selectedGifs: object.isRequired,
  handleSearchChange: func.isRequired
}

export default SideBar
