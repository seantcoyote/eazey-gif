import React, {Component} from 'react'
import {object, array} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
import SideBar from '../../components/SideBar'
import UserBoard from '../../components/UserBoard'
import {urls} from '../../constants/config'
import defaultStyles from './styles'

class App extends Component {
  addGif = (id) => {
    const gif = this.props.searchResultGifs.filter((gif) => gif.id === id)[0]
    this.props.gifActions.updateSelectedGifs(gif);
  }

  render () {
    const {styles} = this.props

    return (
      <div style={{...defaultStyles.base, ...styles}}>
        <header style={defaultStyles.header}>
          <h1 style={defaultStyles.headerTitle}>the giphilator</h1>
        </header>

        <div style={defaultStyles.contentContainer}>
          <SideBar />

          <main style={defaultStyles.gifBoard}>
            <UserBoard selectedGifs={this.props.selectedGifs} onDrop={this.addGif} />
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
  selectedGifs: object.isRequired,
  uiActions: object.isRequired,
  gifActions: object.isRequired
}

const mapStateToProps = (state) => ({
  searchResultGifs: state.gifs.searchResultGifs,
  selectedGifs: state.gifs.selectedGifs
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators(uiActions, dispatch),
  gifActions: bindActionCreators(gifActions, dispatch)
})

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App))
