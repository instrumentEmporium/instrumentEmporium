import { connect } from 'react-redux';

import SingleInstrument from '../components/SingleInstrument';
import { fetchOneInstrument } from '../store';

const mapStateToProps = (storeState, ownProps) => ({
    instrument: storeState.instruments.find(instrument => +ownProps.match.params.id === +instrument.id)
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadInstrument: () => {
      console.log(ownProps.match.params.id);
      const action = fetchOneInstrument(ownProps.match.params.id);
      return dispatch(action);
    }
  });

const SingleInstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleInstrument);

export default SingleInstrumentContainer;