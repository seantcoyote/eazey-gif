export default {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    padding: 10
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
    fontSize: '0.8 em'
  },
  text: {
    margin: '150px auto',
    textAlign: 'center',
    color: '#bbb',
    letterSpacing: '4px',
    font: '100 32px helvetica, sans-serif'
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
