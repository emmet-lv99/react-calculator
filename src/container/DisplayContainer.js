// import { useState } from 'react'
// import calStore from '../CalStore'
import Display from '../components/Display'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    displayProp: state.display,
  }
}

export default connect(mapStateToProps)(Display)

/*

const DisplayCotainer = ({ dataP/!*rop }) => {
  const [display, setDisplay] = useState(calStore.getState().display)
  calStore.subscribe(() => setDisplay(calStore.getState().display))
  return <Display display={display} data={dataProp} />
}

export default DisplayCotainer*!/
*/
