import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import user from './reducers/user';
import instruments from './reducers/instruments';
import topFive from './reducers/topFive';
import singleInstrument from './reducers/singleInstrument';
import cart from './reducers/cart';
import orders from './reducers/orders';
import singleOrder from './reducers/singleOrder';
import allUsers from './reducers/allUsers';

export const reducer = combineReducers({user, instruments, topFive, singleInstrument, cart, orders, singleOrder, allUsers})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));
const store = createStore(reducer, middleware);

export default store;
export * from './reducers/user';
export * from './reducers/instruments';
export * from './reducers/topFive';
export * from './reducers/singleInstrument';
export * from './reducers/cart';
export * from './reducers/singleOrder';
export * from './reducers/orders';
export * from './reducers/allUsers';


