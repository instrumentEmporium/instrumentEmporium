import React from 'react';
import { Link } from 'react-router-dom';

export default class Instrument extends React.Component {
  componentDidMount() {
    if (this.props.loadInstrument) {
      this.props.loadInstrument();
    }
  }

  render() {
    const { instrument } = this.props;
    return (
      <React.Fragment>
        <h2>
          <Link to={`/instruments/${instrument.id}`}>
            {instrument.name}
          </Link>
        </h2>
      </React.Fragment>
    )
  }
}
