import React, { useState } from 'react'
import calStore from '../CalStore'

const Interface = () => {
  const [val1, setVal1] = useState(0)
  const [val2, setVal2] = useState(0)
  const [operator, setOperator] = useState('')

  const onClickNum = num => {
    if (operator) {
      setVal2(val2 * 10 + num)
    } else {
      setVal1(val1 * 10 + num)
    }
    calStore.dispatch({
      type: 'SET_DISPLAY',
      value: calStore.getState().display + num.toString(),
    })
  }

  const makeResult = () => {
    let tmp
    switch (operator) {
      case '＋':
        tmp = val1 + val2
        break
      case '－':
        tmp = val1 - val2
        break
      case '×':
        tmp = val1 * val2
        break
      case '÷':
        tmp = val1 / val2
        break
      default:
        tmp = 0
    }
    calStore.dispatch({ type: 'SET_RESULT', value: tmp })
    setOperator('')
    setVal1(tmp)
    setVal2(0)
    return tmp
  }

  const onClickOperator = op => {
    if (operator) {
      calStore.dispatch({ type: 'SET_DISPLAY', value: makeResult() + op })
    } else {
      calStore.dispatch({
        type: 'SET_DISPLAY',
        value: calStore.getState().display + op,
      })
    }
    setOperator(op)
  }

  const onClickClear = () => {
    calStore.dispatch({ type: 'SET_RESULT', value: 0 })
    calStore.dispatch({ type: 'SET_DISPLAY', value: '' })
    setVal1(0)
    setVal2(0)
    setOperator('')
  }

  const onClickEqual = () => {
    if (!val1 && !val2) {
      calStore.dispatch({ type: 'SET_RESULT', value: 0 })
    } else if (val1 && !val2) {
      calStore.dispatch({ type: 'SET_RESULT', value: val1 })
    } else {
      calStore.dispatch({ type: 'SET_DISPLAY', value: makeResult().toString() })
    }
  }

  const onClickDel = () => {
    if (val2 > 0) {
      setVal2(Number(val2.toString().slice(0, -1)))
      calStore.dispatch({
        type: 'SET_DISPLAY',
        value: calStore.getState().display.slice(0, -1),
      })
    } else if (operator) {
      setOperator('')
      setVal2(0)
      calStore.dispatch({
        type: 'SET_DISPLAY',
        value: calStore.getState().display.slice(0, -1),
      })
    } else {
      setVal1(Number(val1.toString().slice(0, -1)))
      calStore.dispatch({
        type: 'SET_DISPLAY',
        value: calStore.getState().display.slice(0, -1),
      })
    }
  }

  return (
    <>
      <div>
        <div className="interface-row">
          <button onClick={() => onClickClear()} className="interface-item">
            C
          </button>
          <button className="interface-item">.</button>
          <button onClick={() => onClickDel()} className="interface-item">
            ←
          </button>
          <button
            onClick={() => onClickOperator('÷')}
            className="interface-item interface-item-operator"
          >
            ÷
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(7)} className="interface-item">
            7
          </button>
          <button onClick={() => onClickNum(8)} className="interface-item">
            8
          </button>
          <button onClick={() => onClickNum(9)} className="interface-item">
            9
          </button>
          <button
            onClick={() => onClickOperator('×')}
            className="interface-item interface-item-operator"
          >
            ×
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(4)} className="interface-item">
            4
          </button>
          <button onClick={() => onClickNum(5)} className="interface-item">
            5
          </button>
          <button onClick={() => onClickNum(6)} className="interface-item">
            6
          </button>
          <button
            onClick={() => onClickOperator('－')}
            className="interface-item interface-item-operator"
          >
            －
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(1)} className="interface-item">
            1
          </button>
          <button onClick={() => onClickNum(2)} className="interface-item">
            2
          </button>
          <button onClick={() => onClickNum(3)} className="interface-item">
            3
          </button>
          <button
            onClick={() => onClickOperator('＋')}
            className="interface-item interface-item-operator"
          >
            ＋
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(0)} className="interface-item">
            0
          </button>
          <button onClick={() => onClickEqual()} className="interface-item">
            ＝
          </button>
        </div>
      </div>
    </>
  )
}

export default Interface
