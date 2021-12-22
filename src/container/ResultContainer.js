import { useState } from 'react'
import Result from '../components/Result'
import calStore from '../CalStore'

const ResultContainer = () => {
  const [result, setResult] = useState(calStore.getState().result)
  calStore.subscribe(() => setResult(calStore.getState().result))
  return <Result result={result} />
}

export default ResultContainer
