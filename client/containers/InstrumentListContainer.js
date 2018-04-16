import { connect } from 'react-redux';

import InstrumentList from '../components/InstrumentList';
import { fetchInstruments } from '../store';

const mapStateToProps = storeState => ({
  instruments: storeState.instruments
});

const mapDispatchToProps = dispatch => ({
  loadInstruments: () => {
    const action = fetchInstruments();
    return dispatch(action);
  }
});

const InstrumentListContainer = connect(mapStateToProps, mapDispatchToProps)(InstrumentList);

export default InstrumentListContainer;

