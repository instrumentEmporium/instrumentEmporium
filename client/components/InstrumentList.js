import React from 'react';
import Instrument from './Instrument';

export default class InstrumentList extends React.Component {
  componentDidMount() {
    this.props.loadInstruments();
  }

  render(){
    const { instruments } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>Instruments For Sale</h1>
        {Array.isArray(instruments) && instruments.map(instrument => (
            <Instrument instrument={instrument} key={instrument.id} />
          )
        )}
      </React.Fragment>
    )
  }
}
