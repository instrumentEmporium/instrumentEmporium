import { connect } from 'react-redux';

import Cart from '../components/Cart';

const mapStateToProps = (storeState, ownProps) => ({
    cart: storeState.cart
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCart: () => {
    const action = fetchCart();
    return dispatch(action);
  }
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;