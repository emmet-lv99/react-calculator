import { createStore } from 'redux'

const initialState = {
  result: 0,
  val1: 0,
  val2: 0,
  display: '',
  operator: '',
}
export default createStore(function (state = initialState, action) {
  switch (action.type) {
    case 'SET_DISPLAY':
      return {
        ...state,
        display: action.value,
      }
    case 'SET_RESULT':
      return {
        ...state,
        display: action.value,
      }
    default:
      return {
        ...state,
        initialState,
      }
  }
})
