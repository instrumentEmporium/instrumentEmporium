import { connect } from 'react-redux';

import Checkout from '../components/Checkout';
import { fetchCart, fetchInstruments } from '../store';

const mapStateToProps = (storeState) => ({
  cart: storeState.cart,
  instruments: storeState.instruments
});

const mapDispatchToProps = (dispatch) => ({
  loadCart: (cartId) => {
    const action = fetchCart(cartId);
    dispatch(action);
  },
  loadInstruments: () => {
    const action = fetchInstruments();
    dispatch(action);
  }
});

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;
