import { connect } from 'react-redux';

import SingleInstrument from '../components/SingleInstrument';
import { fetchSingleInstrument } from '../store';

const mapStateToProps = (storeState, ownProps) => ({
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