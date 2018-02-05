export default {
  base: {
    width: 'calc(100vw - 100px)',
    height: '100vh',
    margin: '0 50px',
    overflow: 'hidden',
    background: 'white',
    color: '#555',
    '@media screen and (max-width: 860px)': {
      width: 'calc(100vw - 40px)',
      margin: '0 20px'
    }
  },
  header: {
    height: '80px'
  },
  headerTitle: {
    color: '#1c9dec',
    letterSpacing: '4px',
    font: '100 40px helvetica, sans-serif'
  },
  contentContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    height: 'calc(100% - 160px)',
    '@media screen and (max-width: 540px)': {
      justifyContent: 'center'
    }
  },
  gifBoard: {
    flex: '3 0',
    overflowX: 'auto',
    overflowY: 'auto',
    background: '#eee',
    '@media screen and (max-width: 540px)': {
      display: 'none'
    }
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    padding: 20
  },
  footerLink: {
    color: '#00AAE7'
  }
}
