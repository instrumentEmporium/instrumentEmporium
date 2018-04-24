import { connect } from 'react-redux';

import Checkout from '../components/Checkout';
import { fetchCart, fetchInstruments, shippingAddress } from '../store';

const mapStateToProps = (storeState) => ({
  cart: storeState.cart,
  instruments: storeState.instruments,
  user: storeState.user
});

const mapDispatchToProps = (dispatch) => ({
  loadCart: (cartId) => {
    const action = fetchCart(cartId);
    dispatch(action);
  },
  loadInstruments: () => {
    const action = fetchInstruments();
    dispatch(action);
  },
  submitOrder: (id, user) => {
    dispatch(shippingAddress(id, user));
  }
});

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;
