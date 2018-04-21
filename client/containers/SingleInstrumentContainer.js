import { connect } from 'react-redux';

import SingleInstrument from '../components/SingleInstrument';
import { fetchSingleInstrument, fetchCart, postCart, putAddToCart } from '../store';

const mapStateToProps = (storeState, ownProps) => ({
    singleInstrument: storeState.singleInstrument,
    cart: storeState.cart
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadInstrument: () => {
      const action = fetchSingleInstrument(+(ownProps.match.params.id));
      return dispatch(action);
    },
    // loadCart: () => {
    //   const action = fetchCart();
    //   return dispatch(action);
    // },
    addToCart: (item) => {
      const action = putAddToCart(item);
      return dispatch(action);
    },
    createCart: (item) => {
      const action = postCart(item);
      return dispatch(action);
    }
  });

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;
