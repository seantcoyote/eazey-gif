export default {
  base: {
    width: 'calc(100vw - 100px)',
    height: '100vh',
    margin: '0 50px',
    overflow: 'hidden',
    background: 'white',
    color: '#555'
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
    justifyContent: 'space-between',
    height: 'calc(100% - 160px)'
  },
  gifBoard: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
    background: '#eee'
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
