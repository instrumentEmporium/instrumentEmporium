import { connect } from 'react-redux';

import Admin from '../components/AdminPage';
// import {  } from '../store';

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