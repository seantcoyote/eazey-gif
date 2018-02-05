export default {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    height: 'calc(100% - 20px)',
    padding: 10,
  },
  gifCard: {
    margin: 10,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    borderRadius: '2px',
    backgroundColor: 'white'
  },
  caption: {
    marginTop: 5,
    padding: '0 10px 5px',
    fontSize: 14
  },
  text: {
    margin: '100px auto 25px',
    textAlign: 'center',
    color: '#bbb',
    letterSpacing: '4px',
    font: '100 32px helvetica, sans-serif',
    '@media screen and (max-width: 860px)': {
      margin: '20px auto 20px'
    }
  },
  disclaimer: {
    padding: '10px 20px',
    textAlign: 'center',
    color: '#777',
    letterSpacing: '2px',
    font: '100 12px helvetica, sans-serif'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, .5)'
  }
}
