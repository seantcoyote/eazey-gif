import React from 'react'
import ReactDOM from 'react-dom'
import GifSwatch from './GifSwatch'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GifSwatch />, div)
  ReactDOM.unmountComponentAtNode(div)
})
