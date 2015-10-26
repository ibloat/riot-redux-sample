export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const NumberFilters = {
  NEGATIVE: 'NEGATIVE',
  POSITIVE: 'POSITIVE',
  ZERO: 'ZERO'
};

export function increment () {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement () {
  return {
    type: DECREMENT_COUNTER
  }
}
