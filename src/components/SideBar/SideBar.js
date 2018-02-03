import React from 'react'
import {object, array, string} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
import defaultStyles from './styles'

const SideBar = ({searchQuery, searchResultGifs, uiActions, gifActions, styles}) => {
  const searchResultsList = searchResultGifs.map(gif => <li key={gif.id}>{gif.title}</li>)

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
        {searchResultsList}
      </div>
    </aside>
  )
}

SideBar.propTypes = {
  styles: object,
  searchQuery: string,
  searchResultGifs: array.isRequired,
  uiActions: object.isRequired,
  gifActions: object.isRequired
}

const mapStateToProps = (state) => ({
  searchQuery: state.ui.searchQuery,
  searchResultGifs: state.gifs.searchResultGifs
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators(uiActions, dispatch),
  gifActions: bindActionCreators(gifActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
