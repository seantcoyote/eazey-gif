import React from 'react'
import ReactDOM from 'react-dom'
import SideBarContainer from './SideBarContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SideBarContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
