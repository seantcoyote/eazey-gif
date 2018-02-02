import React, {Component} from 'react'
import {object, array} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
import defaultStyles from './styles'

class App extends Component {
  render () {
    const {searchResultGifs, styles} = this.props
    const searchResultsList = searchResultGifs.map(gif => <li key={gif.id}>{gif.title}</li>)
    return (
      <div style={{...defaultStyles.base, ...styles}}>
        <h1>Eaze Giphy App</h1>
        <ul>{searchResultsList}</ul>
      </div>
    )
  }
}

App.propTypes = {
  styles: object,
  searchResultGifs: array.isRequired,
  uiActions: object.isRequired,
  gifActions: object.isRequired
}

const mapStateToProps = (state) => ({
  searchResultGifs: state.gifs.searchResultGifs
})


const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators(uiActions, dispatch),
  gifActions: bindActionCreators(gifActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
