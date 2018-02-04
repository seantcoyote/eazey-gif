import React from 'react'
import {object, func} from 'prop-types'
import Radium from 'radium'
import SideBarContainer from '../../containers/SideBarContainer'
import UserBoard from '../../components/UserBoard'
import {urls} from '../../constants/config'
import defaultStyles from './styles'

const App = ({selectedGifs, addGif, styles}) => {
  return (
    <div style={{...defaultStyles.base, ...styles}}>

      <header style={defaultStyles.header}>
        <h1 style={defaultStyles.headerTitle}>eazey gif</h1>
      </header>

      <div style={defaultStyles.contentContainer}>
        <SideBarContainer />

        <main style={defaultStyles.gifBoard}>
          <UserBoard selectedGifs={selectedGifs} onDrop={addGif} />
        </main>
      </div>

      <footer style={defaultStyles.footer}>
        <a href={urls.footerUrl} style={defaultStyles.footerLink}>Who Can Make the Dance Ram?</a>
      </footer>

    </div>
  )
}

App.propTypes = {
  styles: object,
  addGif: func,
  selectedGifs: object
}

export default Radium(App)
