import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// 同时使用 redux-devtools-extension 和 redux-thunk 这两个中间件的写法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
