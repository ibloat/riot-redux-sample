import { createSelector } from 'reselect';
import { NumberFilters } from '../actions/counter';

function selectColor(count) {
  if (count < 0) return NumberFilters.NEGATIVE
  if (count > 0) return NumberFilters.POSITIVE
  return NumberFilters.ZERO
}

const countSelector = (state) => state.counter.count

export const countSignSelector = createSelector(
  [countSelector],
  (count) => {
    return {
      count,
      sign: selectColor(count)
    }
  }
)
