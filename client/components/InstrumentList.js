import React from 'react';
import Instrument from './Instrument';
import { Grid, Container, Header } from 'semantic-ui-react';

export default class InstrumentList extends React.Component {
  componentDidMount() {
    this.props.loadInstruments();
  }

  render() {
    const { instruments } = this.props;
    return (
      <React.Fragment>
        <Header as='h1' textAlign='center'>Instruments For Sale</Header>
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
