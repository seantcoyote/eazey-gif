import React from 'react'
import {object, array, string} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
import SideBar from '../../components/SideBar'

const SideBarContainer = ({searchQuery, searchResultGifs, selectedGifs, uiActions, gifActions}) => {
  const handleSearchChange = (e) => {
    const query = e.target.value
    uiActions.updateSearchQuery(query)
    gifActions.loadGifData(query)
  }

  return (
    <SideBar
      searchQuery={searchQuery}
      searchResultGifs={searchResultGifs}
      selectedGifs={selectedGifs}
      handleSearchChange={handleSearchChange}
    />
  )
}

SideBarContainer.propTypes = {
  searchQuery: string,
  searchResultGifs: array.isRequired,
  selectedGifs: object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)
