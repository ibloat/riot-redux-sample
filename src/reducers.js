import { combineReducers } from 'redux'

import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from './actions'

const DEFAULT_COUNTER_STATE = {
  value: 0,
  direction: '⇒',
  resetCount: 0
}

function countReducer (state = DEFAULT_COUNTER_STATE, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, value: state.value + 1, direction: '⇑' }
    case DECREASE_COUNTER:
      return { ...state, value: state.value - 1, direction: '⇓' }
    case RESET_COUNTER:
      return action.payload
        ? { ...DEFAULT_COUNTER_STATE, resetCount: state.resetCount + 1 }
        : state
    default:
      return state
  }
}

export default combineReducers({
  count: countReducer
})
