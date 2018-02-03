import React from 'react'
import {object, array, string} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import GifSwatch from '../GifSwatch'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
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

const SideBar = ({searchQuery, searchResultGifs, selectedGifs, uiActions, gifActions, styles}) => {
  const resultSwatches = searchResultGifs.map(renderSwatch.bind(null, selectedGifs))

  const onSearchChange = (e) => {
    const query = e.target.value
    uiActions.updateSearchQuery(query)
    gifActions.loadGifData(query)
  }

  return (
    <aside style={{...defaultStyles.base, ...styles}}>
      <input
        style={defaultStyles.searchInput}
        placeholder="Search GIPHY"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <div style={defaultStyles.searchResults}>
        {resultSwatches}
      </div>
    </aside>
  )
}

SideBar.propTypes = {
  styles: object,
  searchQuery: string,
  searchResultGifs: array.isRequired,
  selectedGifs: object.isRequired,
  uiActions: object.isRequired,
  gifActions: object.isRequired
}

const mapStateToProps = (state) => ({
  searchQuery: state.ui.searchQuery,
  searchResultGifs: state.gifs.searchResultGifs,
  selectedGifs: state.gifs.selectedGifs
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators(uiActions, dispatch),
  gifActions: bindActionCreators(gifActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
