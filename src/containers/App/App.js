import React, {Component} from 'react'
import {object, array} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
import {urls} from '../../constants/config'
import defaultStyles from './styles'

class App extends Component {
  render () {
    const {searchResultGifs, styles} = this.props
    const searchResultsList = searchResultGifs.map(gif => <li key={gif.id}>{gif.title}</li>)
    return (
      <div style={{...defaultStyles.base, ...styles}}>
        <header style={defaultStyles.header}>
          <h1 style={defaultStyles.headerTitle}>the giphilator</h1>
        </header>

        <div style={defaultStyles.contentContainer}>
          {/* <SideBar /> */}

          <main style={defaultStyles.gifBoard}>
            {searchResultsList}
            {/* <GifDropzone selectedGifs={this.props.selectedGifs} onDrop={this.addGif}/> */}
          </main>
        </div>

        <footer style={defaultStyles.footer}>
          <a href={urls.footerUrl} target="_blank" style={defaultStyles.footerLink}>Who Can Make the Dance Ram?</a>
        </footer>
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
