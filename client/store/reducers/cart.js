import axios from 'axios';

//ACTION TYPES
const GET_CART = 'GET_CART';
const CLEAR_CART = 'CLEAR_CART';
const CREATE_CART = 'CREATE_CART';

export const getCart = cart => ({
  type: GET_CART,
  cart
});

// export const createCart = cart => ({
//   type: CREATE_CART,
//   cart
// })

export const clearCart = cart => ({
  type: CLEAR_CART,
  cart
});

//THUNK CREATORS
export const fetchCart = () => {
  return dispatch => {
    return axios
      .get(`/api/cart`)
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
      .post(`/api/cart`, item)
      .then(res => res.data)
      .then(newCart => {
        const action = getCart(newCart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const addToCart = (cartId, itemToAdd, currentCartItems) => {
  return dispatch => {
    return axios
      .put(`/api/cart/`, {
        id: cartId,
        items: currentCartItems.concat([itemToAdd])
      })
      .then(res => res.data)
      .then(cart => {
        const action = getCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  }
}

export const removeFromCart = (cartId, itemToRemove, currentCartItems) => {
  return dispatch => {
    return axios
      .put(`/api/cart`, {
        id: cartId,
        items: currentCartItems.filter(item => item.id !== itemToRemove.id)
      })
      .then(res => res.data)
      .then(cart => {
        const action = getCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  }
}

//REDUCER
export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case CLEAR_CART:
      return {};
    // case CREATE_CART:
    //   return action.cart;
    default:
      return state;
  }
}

