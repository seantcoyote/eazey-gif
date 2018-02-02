import React from 'react'
import {object} from 'prop-types'
import defaultStyles from './styles'

const NewComponent = ({styles}) => {
  return (
    <div style={{...defaultStyles.base, ...styles}}>
      <p>NewComponent</p>
    </div>
  )
}

NewComponent.propTypes = {
  styles: object
}

export default NewComponent
