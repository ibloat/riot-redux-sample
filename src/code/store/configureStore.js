import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

let createStoreWithMiddleware

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = createStore
} else {
  createStoreWithMiddleware = compose(/* dev middlewares go here */)(createStore)
}

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
