import { connect } from 'react-redux';

import Checkout from '../components/Checkout';
import { fetchCart, fetchInstruments } from '../store';

const mapStateToProps = (storeState) => ({
  cart: storeState.cart,
  instruments: storeState.instruments
});

const mapDispatchToProps = (dispatch) => ({
  loadCart: () => {
    const action = fetchCart();
    dispatch(action);
  },
  loadInstruments: () => {
    const action = fetchInstruments();
    dispatch(action);
  }
});

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;
