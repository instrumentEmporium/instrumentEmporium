import axios from 'axios';

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const GET_CART = 'GET_CART';
const CLEAR_CART = 'CLEAR_CART';
const CREATE_CART = 'CREATE_CART';

//ACTION CREATORS
export const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  item
});

export const getCart = cart => ({
  type: GET_CART,
  cart
});

export const createCart = cart => ({
  type: CREATE_CART,
  cart
})

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
        const action = createCart(newCart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

export const putAddToCart = itemToAdd => {
  return dispatch => {
    return axios
      .put(`/api/cart/add`, itemToAdd)
      .then(res => res.data)
      .then(cart => {
        const action = addToCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  }
}

export const putRemoveFromCart = itemToRemove => {
  return dispatch => {
    return axios
      .put(`/api/cart/remove`, itemToRemove)
      .then(res => res.data)
      .then(cart => {
        const action = removeFromCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  }
}

//REDUCER
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.item.id);
    case GET_CART:
      return action.cart;
    case CLEAR_CART:
      return [];
    case CREATE_CART:
      return action.cart;
    default:
      return state;
  }
}
