import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './reducers/user'
import instruments from './reducers/instruments'
import topFive from './reducers/topFive'
import singleInstrument from './reducers/singleInstrument'

export const reducer = combineReducers({user, instruments, topFive, singleInstrument})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user'
export * from './reducers/instruments'
export * from './reducers/topFive'
export * from './reducers/singleInstrument'

