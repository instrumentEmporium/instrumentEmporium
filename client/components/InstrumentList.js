import React from 'react';
import Instrument from './Instrument';
import { Grid, Container, Header } from 'semantic-ui-react';

export default class InstrumentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.loadInstruments();
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleClick(event) {
    this.setState({
      categoryInput: event.target.value
    })
  }

  render() {
    let instruments = this.props.instruments.filter(instrument => {
      if (this.state.categoryInput) return instrument.type.match(this.state.categoryInput)
      else return instrument.name.match(this.state.input)
    })

    return (
      <React.Fragment>
        <Header as='h1' textAlign='center'>Instruments For Sale</Header>
        <div style={{ 
          marginLeft: '26em',
          marginBottom: '2em',
          textAlign: 'left',
          }}>
          <form>
            <input
              placeholder='Search For Instrument'
              onChange={this.handleChange}
            />
          </form>
          <span>Search By Category </span>
          <button value={''} onClick={this.handleClick}>All Instruments</button>
          <button value={'Keyboard'} onClick={this.handleClick}>Keyboard</button>
          <button value={'String'} onClick={this.handleClick}>String</button>
          <button value={'Woodwind'} onClick={this.handleClick}>Woodwind</button>
          <button value={'Percussion'} onClick={this.handleClick}>Percussion</button>
          <button value={'Brass'} onClick={this.handleClick}>Brass</button>
        </div>
        <Container textAlign='center'>
          <Grid columns={4} >
            {Array.isArray(instruments) && instruments.map(instrument => (
              <Grid.Column key={instrument.id}>
                <Instrument instrument={instrument} key={instrument.id} />
              </Grid.Column>
            )
            )}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}
