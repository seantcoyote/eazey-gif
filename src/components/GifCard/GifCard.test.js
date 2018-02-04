import React from 'react'
import ReactDOM from 'react-dom'
import GifCard from './GifCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GifCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
