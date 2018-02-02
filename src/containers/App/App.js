import React, {Component} from 'react'
import {object} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import defaultStyles from './styles'

class App extends Component {
  render () {
    const {styles} = this.props

    return (
      <div style={{...defaultStyles.base, ...styles}}>
        <h1>Eaze Giphy App</h1>
      </div>
    )
  }
}

App.propTypes = {
  styles: object
}

const mapStateToProps = (state) => ({
  appInfo: state.appInfo
})


const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators(uiActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
