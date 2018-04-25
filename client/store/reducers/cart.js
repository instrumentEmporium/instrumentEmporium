import axios from 'axios';

//ACTION TYPES
const GET_CART = 'GET_CART';
const CLEAR_CART = 'CLEAR_CART';

export const getCart = cart => ({
  type: GET_CART,
  cart
});

export const clearCart = cart => ({
  type: CLEAR_CART,
  cart
});

//THUNK CREATORS
export const fetchCart = () => {
  return dispatch => {
    return axios
      .get(`/api/carts/myCart`)
      .then(res => res.data)
      .then(cart => {
        const action = getCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const postCart = item => {
  return dispatch => {
    return axios
      .post(`/api/carts`, item)
      .then(res => res.data)
      .then(newCart => {
        const action = getCart(newCart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const addToCart = (itemToAdd, currentCart) => {
  return dispatch => {
    return axios
      .put(`/api/carts/${currentCart.id}`, {
        items: currentCart.items.concat([itemToAdd])
      })
      .then(res => res.data)
      .then(cart => {
        const action = getCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const editCart = (itemToUpdate, currentCart) => {
  return dispatch => {
    return axios
      .put(`/api/carts/${currentCart.id}`, {
        items: currentCart.items.filter(item => item.id !== itemToUpdate.id).concat([itemToUpdate])
      })
      .then(res => res.data)
      .then(cart => {
        const action = getCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const removeFromCart = (itemToRemove, currentCart) => {
  return dispatch => {
    return axios
      .put(`/api/carts/${currentCart.id}`, {
        items: currentCart.items.filter(item => item.id !== itemToRemove.id)
      })
      .then(res => res.data)
      .then(cart => {
        const action = getCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

//REDUCER
export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}
