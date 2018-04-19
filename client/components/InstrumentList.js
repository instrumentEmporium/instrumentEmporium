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
  }

  componentDidMount() {
    this.props.loadInstruments();
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    const instruments = this.props.instruments.filter(instrument => instrument.name.match(this.state.input));

    return (
      <React.Fragment>
        <Header as='h1' textAlign='center'>Instruments For Sale</Header>
        <div style={{ 
          marginLeft: '26em',
          marginBottom: '2em',
          textAlign: 'left' 
          }}>
          <form>
            <input
              placeholder='Search For Instrument'
              onChange={this.handleChange}
            />
          </form>
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
