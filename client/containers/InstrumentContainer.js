import { connect } from 'react-redux';

import Instrument from '../components/Instrument';
import { fetchOneInstrument } from '../store';

const mapStateToProps = (storeState, ownProps) => ({
  instrument: storeState.instruments.find(instrument => +ownProps.match.params.id === +instrument.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadInstrument: () => {
    const action = fetchOneInstrument(ownProps.match.params.id);
    return dispatch(action);
  }
});

const InstrumentContainer = connect(mapStateToProps, mapDispatchToProps)(Instrument);

export default InstrumentContainer;
