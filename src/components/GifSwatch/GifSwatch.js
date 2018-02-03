import React, {Component} from 'react'
import {func, object, bool} from 'prop-types'
import {DragSource} from 'react-dnd'
import {DraggableTypes} from '../../constants'
import defaultStyles from './styles'

// Decorate component with DragSource functionality
// See react-dnd docs: http://gaearon.github.io/react-dnd/docs-overview.html

// @DragSource(DraggableTypes.GIF, { // implement DragSource interface
//   beginDrag(props, monitor, component) {
//     // return data that identifies this draggable
//     const item = { id: props.id }
//     return item
//   }
// }, function registerWithDnD(connect, monitor) {
//   return { // These props are injected into component
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
//   }
// })

// Specifies the drag source contract.
const cardSource = {
  beginDrag (props) {
    // Return the data describing the dragged item
    const item = { id: props.id }
    return item
  }
}

// Specifies which props to inject into your component.
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  }
}

class GifSwatch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animateThumbnail: false
    }
  }

  static propTypes = {
    thumbnail: object.isRequired,
    // Injected by React DnD:
    connectDragSource: func.isRequired,
    isDragging: bool.isRequired
  }

  startAnimation = () => {
    this.setState({animateThumbnail: true})
  }

  endAnimation = () => {
    this.setState({animateThumbnail: false})
  }

  render() {
    const {isDragging, connectDragSource, thumbnail} = this.props

    const styles = {
      width: '100%',
      ...(isDragging ? defaultStyles.draggingStyles : {})
    }

    let imageType = this.state.animateThumbnail ? 'fixed_width_small' : 'fixed_width_small_still'

    return connectDragSource(
      <div
        className={"gifSwatch"}
        style={styles}
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

export default DragSource(DraggableTypes.GIF, cardSource, collect)(GifSwatch)
// export default GifSwatch
