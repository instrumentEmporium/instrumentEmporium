import { connect } from 'react-redux';

import Cart from '../components/Cart';
import { fetchCart, fetchInstruments, removeFromCart, editCart } from '../store';

const mapStateToProps = (storeState) => ({
  cart: storeState.cart,
  instruments: storeState.instruments
});

const mapDispatchToProps = (dispatch) => ({
  loadCart: (cartId) => {
    const action = fetchCart(cartId);
    return dispatch(action);
  },
  loadInstruments: () => {
    const action = fetchInstruments();
    return dispatch(action);
  },
  removeFromCart: (itemToRemove, currentCartItems) => {
    const action = removeFromCart(itemToRemove, currentCartItems);
    return dispatch(action);
  },
  editCart: (itemToAdd, currentCartItems) => {
    const action = editCart(itemToAdd, currentCartItems);
    return dispatch(action);
  }
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
