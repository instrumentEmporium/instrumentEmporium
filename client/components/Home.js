import React from 'react';
import { Link } from 'react-router-dom';
// import SingleInstrument from './SingleInstrument';
import Instrument from './Instrument';


export default class Home extends React.Component {
  componentDidMount() {
    if (this.props.loadTopFive) {
      this.props.loadTopFive();
    }
  }

  render() {
    const { topFive } = this.props; 
    console.log(topFive)
    return(
      <div>
        <h2> Welcome to the Instrument Emporium!</h2>
        <button>
          <Link to="/instruments"> Explore all our products </Link>
        </button>
        { 
          topFive && topFive.map(instrument => {
            return (
              <Instrument instrument={instrument} key={instrument.id} />
            )
          })
        }
      </div>
    )
  }
}
