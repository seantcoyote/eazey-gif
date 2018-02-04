import React from 'react'
import {object} from 'prop-types'
import defaultStyles from './styles'

const ImageCaption = ({text, styles}) => {
  const caption = (text.charAt(0).toUpperCase() + text.substring(1)).trim() || 'Untitled'
  return (
    <p style={{...defaultStyles.base, ...styles}}>
      {caption}
    </p>
  )
}

ImageCaption.propTypes = {
  styles: object
}

export default ImageCaption
