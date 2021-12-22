import React from 'react'
import Header from '../components/Header'
import DisplayContainer from '../container/DisplayContainer'
import ResultContainer from '../container/ResultContainer'
import InterfaceContainer from '../container/InterfaceContainer'
import '../Calculator.css'

const Main = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="calculator-wrapper">
        <DisplayContainer />
        <ResultContainer />
        <InterfaceContainer />
      </main>
    </>
  )
}

export default Main
