import axios from 'axios'
import history from '../../history'
import { getCart } from './cart';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const putUser = user => ({type: UPDATE_USER, user})
/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err));

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data));
        history.push('/editAccount');
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser());
        dispatch(getCart({}));
        history.push('/');
      })
      .catch(err => console.log(err));

export const updateUser = (id, user) => {
  return dispatch =>
     axios.put(`/api/users/${id}`, user)
     .then(res => res.data)
      .then(puttedUser => {
        dispatch(putUser(puttedUser))
        history.push('/myAccount')
      })
      .catch(err => console.log(err));
}

export const shippingAddress = (id, user) => {
  return dispatch =>
    axios.put(`/api/orders/${id}`, user)
      .then(res => res.data)
      .then(puttedUser => {
        dispatch(putUser(puttedUser))
      })
      .catch(err => console.log(err));
    }

export const putAdminStatus = (id, user) => {
  return dispatch => 
  axios.put(`api/users/admin/${id}`, user)
    .then(res => res.data)
    .then(newAdmin => {
      dispatch(putUser(newAdmin))
    })
    .catch(err => console.log(err));
}

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case UPDATE_USER:
      return action.user
    default:
      return state;
  }
};
