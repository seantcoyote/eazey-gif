import React from 'react'
import ReactDOM from 'react-dom'
import ImageCaption from './ImageCaption'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ImageCaption />, div)
  ReactDOM.unmountComponentAtNode(div)
})
