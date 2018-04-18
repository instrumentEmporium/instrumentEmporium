import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './reducers/user'
import instruments from './reducers/instrument'
import topFive from './reducers/topFive'

export const reducer = combineReducers({user, instruments, topFive})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user'
export * from './reducers/instrument'
export * from './reducers/topFive'

