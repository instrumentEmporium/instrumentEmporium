import { connect } from 'react-redux';

import Cart from '../components/Cart';
import { fetchCart, fetchInstruments } from '../store';

const mapStateToProps = (storeState) => ({
    cart: storeState.cart,
    instruments: storeState.instruments
});

const mapDispatchToProps = (dispatch) => ({
  loadCart: () => {
    const action = fetchCart();
    return dispatch(action);
  },
  loadInstruments: () => {
    const action = fetchInstruments();
    return dispatch(action);
  }
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
