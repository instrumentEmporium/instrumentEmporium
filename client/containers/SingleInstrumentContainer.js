import { connect } from 'react-redux';

import SingleInstrument from '../components/SingleInstrument';
import { fetchSingleInstrument, fetchCart, postCart, addToCart, editCart } from '../store';

const mapStateToProps = (storeState) => ({
    singleInstrument: storeState.singleInstrument,
    cart: storeState.cart
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadInstrument: () => {
      const action = fetchSingleInstrument(+(ownProps.match.params.id));
      return dispatch(action);
    },
    loadCart: () => {
      const action = fetchCart();
      return dispatch(action);
    },
    addToCart: (cartId, itemToAdd, currentCartItems) => {
      const action = addToCart(cartId, itemToAdd, currentCartItems);
      return dispatch(action);
    },
    createCart: (item) => {
      const action = postCart(item);
      return dispatch(action);
    },
    editCart: (cartId, itemToAdd, currentCartItems) => {
      const action = editCart(cartId, itemToAdd, currentCartItems);
      return dispatch(action);
    }
  });

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;
