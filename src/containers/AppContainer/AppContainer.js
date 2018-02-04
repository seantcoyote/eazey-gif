import React, {Component} from 'react'
import {object, array} from 'prop-types'
import {bindActionCreators, compose} from 'redux'
import {connect} from 'react-redux'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import App from '../../components/App'
import * as gifActions from '../../actions/gifActions'

class AppContainer extends Component {
  addGif = (id) => {
    const gif = this.props.searchResultGifs.filter((gif) => gif.id === id)[0]
    this.props.gifActions.updateSelectedGifs(gif);
  }

  render () {
    return (
      <App selectedGifs={this.props.selectedGifs} addGif={this.addGif} />
    )
  }
}

AppContainer.propTypes = {
  searchResultGifs: array.isRequired,
  selectedGifs: object.isRequired,
  gifActions: object.isRequired
}

const mapStateToProps = (state) => ({
  searchResultGifs: state.gifs.searchResultGifs,
  selectedGifs: state.gifs.selectedGifs
})

const mapDispatchToProps = (dispatch) => ({
  gifActions: bindActionCreators(gifActions, dispatch)
})

const wrap = compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispatchToProps)
)

export default wrap(AppContainer)
