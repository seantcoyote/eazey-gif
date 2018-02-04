import React, {Component} from 'react'
import {func, object, bool} from 'prop-types'
import {DragSource} from 'react-dnd'
import {DraggableTypes} from '../../constants'
import ImageCaption from '../ImageCaption'
import defaultStyles from './styles'

// See react-dnd docs for details: http://gaearon.github.io/react-dnd/docs-overview.html
// Specifies the drag source contract.
const cardSource = {
  beginDrag (props) { // Return the data describing the dragged item
    const item = { id: props.id }
    return item
  }
}

// Specifies which props to inject into your component.
const collect = (connect, monitor) => {
  return { // Call connectDragSource inside render() to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class GifCard extends Component {
  state = {
    animateThumbnail: false
  }

  startAnimation = () => {
    this.setState({animateThumbnail: true})
  }

  endAnimation = () => {
    this.setState({animateThumbnail: false})
  }

  render() {
    const {isDragging, connectDragSource, title, thumbnail, styles} = this.props
    const draggingStyles = isDragging ? defaultStyles.draggingStyles : {}
    let imageType = this.state.animateThumbnail ? 'fixed_width_small' : 'fixed_width_small_still'

    return connectDragSource(
      <div
        style={{...defaultStyles.base, ...draggingStyles, ...styles}}
        onMouseOver={this.startAnimation}
        onMouseOut={this.endAnimation}
      >
        <img
          src={thumbnail[imageType].url}
          alt={title}
          style={{width: '100%'}}
        /><br />
        <ImageCaption text={title} />
      </div>
    )
  }
}

GifCard.propTypes = {
  thumbnail: object.isRequired,
  connectDragSource: func.isRequired, // Injected by React DnD
  isDragging: bool.isRequired // Injected by React DnD
}

export default DragSource(DraggableTypes.GIF, cardSource, collect)(GifCard)
