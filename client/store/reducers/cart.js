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
//the entire new cart that's been updated
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

//que pasa? Do you need this payload 'cart'?
//can just be 'export const clearCart = ()  => ....'
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
//can just call AddToCart
export const putAddToCart = (cartId, itemToAdd, currentCartItems) => {
  return dispatch => {
    return axios
    //`/api/cart/:cartId`
      .put(`/api/cart/`, {
        id: cartId,
        items: currentCartItems.concat([itemToAdd])
      })
      .then(res => res.data)
      .then(cart => {
        const action = addToCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  }
}

export const putRemoveFromCart = (cartId, itemToRemove, currentCartItems) => {
  return dispatch => {
    return axios
      .put(`/api/cart`, {
        id: cartId,
        items: currentCartItems.filter(item => item.id !== itemToRemove.id)
      })
      .then(res => res.data)
      .then(cart => {
        //can call it `getCart(cart)`
        //or update the DB and then filter out here
        const action = removeFromCart(cart);
        dispatch(action);
      })
      .catch(err => console.error(err));
  }
}

//REDUCER
//if reducers have the repeated functionality, i.e. GET_CART, CREATE_CART, you can reuse functions
//always return a new object
export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
    //changing the state where you will return an array instead of an object
      return state.items.concat([action.item]);
      //return `item`; return cart;
    case REMOVE_FROM_CART:
      return state.items.filter(item => item.id !== action.item.id);
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

