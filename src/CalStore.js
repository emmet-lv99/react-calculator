import { createStore } from 'redux'

const initialState = {
  result: 0,
  display: '',
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
        result: action.value,
      }
    default:
      return {
        ...state,
        initialState,
      }
  }
})
