import { connect } from 'react-redux';

import SingleInstrument from '../components/SingleInstrument';
import { fetchSingleInstrument } from '../store';

// OB/SZ: strange indentation in this file
const mapStateToProps = (storeState, ownProps) => ({
  // OB/SZ: consider finding single instrument from storeState.instruments (less redundant data)
    singleInstrument: storeState.singleInstrument
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadInstrument: () => {
      const action = fetchSingleInstrument(+(ownProps.match.params.id));
      return dispatch(action);
    }
  });

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;