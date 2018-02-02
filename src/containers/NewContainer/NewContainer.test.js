import React from 'react'
import ReactDOM from 'react-dom'
import NewContainer from './NewContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
