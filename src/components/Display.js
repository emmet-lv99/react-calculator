import React, { useState } from 'react'
import '../Calculator.css'
import calStore from '../CalStore'

const Display = () => {
  const [display, setDisplay] = useState(calStore.getState().display)
  calStore.subscribe(() => setDisplay(calStore.getState().display))
  return (
    <>
      <div className="display">{display}</div>
    </>
  )
}

export default Display
