import React, {Component} from 'react'
import {object, array} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import * as uiActions from '../../actions/uiActions'
import * as gifActions from '../../actions/gifActions'
import SideBar from '../../components/SideBar'
import {urls} from '../../constants/config'
import defaultStyles from './styles'

class App extends Component {
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
            <p>Hey Yo</p>
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

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App))
