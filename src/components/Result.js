import React, { useState } from 'react'
import '../Calculator.css'
import calStore from '../CalStore'

const Result = () => {
  const [result, setResult] = useState(calStore.getState().result)
  calStore.subscribe(() => setResult(calStore.getState().result))

  return (
    <>
      <div className="result">{result}</div>
    </>
  )
}

export default Result
