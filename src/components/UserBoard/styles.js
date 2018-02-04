export default {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  gifCard: {
    width: 'auto',
    height: 'auto',
    margin: 10,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    borderRadius: '2px',
    backgroundColor: 'white'
  },
  caption: {
    marginTop: 5,
    padding: '0 5px 10px 5px',
    fontSize: '0.9em'
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
