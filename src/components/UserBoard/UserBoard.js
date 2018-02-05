import React from 'react'
import {func, string, bool} from 'prop-types'
import {compose} from 'redux'
import {DropTarget} from 'react-dnd'
import Radium from 'radium'
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

const isSmallScreen = window.innerWidth < 1025

const introMessage = (
  <span>
    <p style={defaultStyles.text}>
      Drag a gif here to start your collection!
    </p>
    {isSmallScreen &&
      <p style={defaultStyles.disclaimer}>*BTW, if you're using a mobile device, we're super sorry, but eazey gif doesn't yet support drag and drop on touchscreens :-(</p>
    }
  </span>
)

const UserBoard = ({connectDropTarget, isOver, canDrop, selectedGifs, styles}) => {
  const images = Object.keys(selectedGifs).map((id) => {
      const gif = selectedGifs[id]
      const image = gif.images.fixed_height
      return (
        <div key={id} style={defaultStyles.gifCard}>
          <img
            alt={gif.title}
            src={image.url}
            width="100%"
            height={image.height}
          />
          <ImageCaption text={gif.title} styles={defaultStyles.caption}/>
        </div>
      )
    }
  )

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

const wrap = compose(
  DropTarget(DraggableTypes.GIF, targetSpec, collect),
  Radium
)

export default wrap(UserBoard)
