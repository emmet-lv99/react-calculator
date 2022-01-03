//Presentational Component
import React from 'react'
import '../Calculator.css'

const Display = props => {
  return <div className="display">{props.displayProp}</div>
}

export default Display
