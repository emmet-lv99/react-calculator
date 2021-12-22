import React from 'react'
import calStore from '../CalStore'
import Interface from '../components/Interface'

const InterfaceContainer = () => {
  const display = calStore.getState().display
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
