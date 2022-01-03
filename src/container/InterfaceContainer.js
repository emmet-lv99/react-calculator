// import React, { useState } from 'react'
// import calStore from '../CalStore'
import Interface from '../components/Interface'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    display: state.display,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emitDisplay: val => dispatch({ type: 'SET_DISPLAY', value: val }),
    emitResult: val => dispatch({ type: 'SET_RESULT', value: val }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface)

/*
const InterfaceContainer = () => {
  const [display, setDisplay] = useState(calStore.getState().display)
  calStore.subscribe(() => setDisplay(calStore.getState().display))
  const emitDisplay = val => {
    calStore.dispatch({ type: 'SET_DISPLAY', value: val })
  }
  const emitResult = val => {
    calStore.dispatch({ type: 'SET_RESULT', value: val })
  }
  return (
    <Interface
      display={display}
      emitDisplay={emitDisplay}
      emitResult={emitResult}
    />
  )
}

export default InterfaceContainer
*/
