import React from 'react'
import {func, string, bool} from 'prop-types'
import {DropTarget} from 'react-dnd'
import GifCard from '../GifCard'
import {DraggableTypes} from '../../constants'
import ImageCaption from '../ImageCaption'
import defaultStyles from './styles'

// react-dnd docs: http://gaearon.github.io/react-dnd/docs-overview.html
// Specifies the drag source contract.
const targetSpec = {
  drop (props, monitor) {
    const item = monitor.getItem()
    props.onDrop(item.id)
  }
}

// Specifies which props to inject into your component.
const collect = (connect, monitor) => {
  return { // Call connectDropTarget inside render() to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const UserBoard = ({connectDropTarget, isOver, canDrop, selectedGifs, styles}) => {
  const introMessage = <p style={defaultStyles.text}>Drag a gif here to start your collection!</p>

  const images = Object.keys(selectedGifs).map((id) => {
      const gif = selectedGifs[id]
      const image = gif.images.fixed_height
      return (
        <div key={id} style={defaultStyles.gifCard}>
          <img
            alt={gif.title}
            src={image.url}
            width={image.width}
            height={image.height}
          />
          <ImageCaption text={gif.title} style={defaultStyles.caption} />
        </div>
      )
    })

  return connectDropTarget(
    <div style={{...defaultStyles.base, ...styles}}>
      <div style={isOver && canDrop ? defaultStyles.overlay : {display: 'none'}}></div>
      {images.length ? images : introMessage}
    </div>
  )
}

UserBoard.propTypes = {
  src: string,
  onDrop: func,
  // Injected by React DnD:
  connectDropTarget: func.isRequired,
  isOver: bool.isRequired,
  canDrop: bool.isRequired
}

export default DropTarget(DraggableTypes.GIF, targetSpec, collect)(UserBoard)
