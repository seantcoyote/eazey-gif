import React from 'react'
import ReactDOM from 'react-dom'
import UserBoard from './UserBoard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserBoard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
