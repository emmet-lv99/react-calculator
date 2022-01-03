// import { useState } from 'react'
// import calStore from '../CalStore'
import Result from '../components/Result'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ result: state.result })

export default connect(mapStateToProps)(Result)

/*
const ResultContainer = () => {
  const [result, setResult] = useState(calStore.getState().result)
  calStore.subscribe(() => setResult(calStore.getState().result))
  return <Result result={result} />
}

export default ResultContainer
*/
