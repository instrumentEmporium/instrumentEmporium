import { connect } from 'react-redux';

import SingleInstrument from '../components/SingleInstrument';
import { fetchSingleInstrument, fetchCart, postCart, addToCart } from '../store';

const mapStateToProps = (storeState) => ({
    singleInstrument: storeState.singleInstrument,
    cart: storeState.cart
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadInstrument: () => {
      const action = fetchSingleInstrument(+(ownProps.match.params.id));
      return dispatch(action);
    },
    loadCart: (cartId) => {
      const action = fetchCart(cartId);
      return dispatch(action);
    },
    addToCart: (itemToAdd, currentCart) => {
      const action = addToCart(itemToAdd, currentCart);
      return dispatch(action);
    },
    createCart: (item) => {
      const action = postCart(item);
      return dispatch(action);
    }
  });

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;
