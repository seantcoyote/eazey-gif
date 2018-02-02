import React from 'react'
import ReactDOM from 'react-dom'
import NewAppContainer from './NewAppContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewAppContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
