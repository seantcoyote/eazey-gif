import React, {Component} from 'react'
import {object} from 'prop-types'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
// import * as uiActions from '../../actions/uiActions'
import defaultStyles from './styles'

class NewAppContainer extends Component {
  componentWillMount () {
    console.log('NewAppContainer props:', this.props)
  }

  render () {
    const {styles} = this.props

    return (
      <div style={{...defaultStyles.base, ...styles}}>
        <h1>Eaze Giphy App</h1>
      </div>
    )
  }
}

NewAppContainer.propTypes = {
  styles: object
}

// const mapStateToProps = (state) => ({
//   appInfo: state.appInfo
// })
//
//
// const mapDispatchToProps = (dispatch) => ({
//   uiActions: bindActionCreators(uiActions, dispatch)
// })
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewAppContainer))

export default NewAppContainer
