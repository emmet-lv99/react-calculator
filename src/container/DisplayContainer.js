import { useState } from 'react'
import calStore from '../CalStore'
import Display from '../components/Display'

const DisplayCotainer = () => {
  const [display, setDisplay] = useState(calStore.getState().display)
  calStore.subscribe(() => setDisplay(calStore.getState().display))
  return <Display display={display} />
}

export default DisplayCotainer
