import React, {Component} from 'react'
import {func, object, bool} from 'prop-types'
import {DragSource} from 'react-dnd'
import {DraggableTypes} from '../../constants'
import defaultStyles from './styles'

// react-dnd docs: http://gaearon.github.io/react-dnd/docs-overview.html

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

class GifSwatch extends Component {
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
    const {isDragging, connectDragSource, thumbnail, styles} = this.props
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
          alt={thumbnail.title}
          style={{width: '100%'}}
        />
      </div>
    )
  }
}

GifSwatch.propTypes = {
  thumbnail: object.isRequired,
  // Injected by React DnD:
  connectDragSource: func.isRequired,
  isDragging: bool.isRequired
}

export default DragSource(DraggableTypes.GIF, cardSource, collect)(GifSwatch)
