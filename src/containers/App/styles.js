export default {
  base: {
    width: 'calc(100% - 100px)',
    height: '100%',
    margin: '0 50px',
    overflow: 'hidden',
    background: 'white'
  },
  header: {
    height: '80px'
  },
  headerTitle: {
    color: '#777',
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
    padding: '20px',
    background: '#ccc'
  },
  footerLink: {
    color: '#444'
  }
}
