import { createSelector } from 'reselect'

export const countSelector = createSelector(
  (state) => state.count.value,
  (state) => state.count.direction,
  (count, direction) => ({ count, direction })
)

export const resetCountSelector = createSelector(
  (state) => state.count.resetCount,
  (count) => count
)

