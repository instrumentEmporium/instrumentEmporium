import React from 'react';
import Instrument from './Instrument';
import { Grid, Container, Header, Menu, Input, Segment } from 'semantic-ui-react';

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

  handleClick(event, { name }) {
    this.setState({
      categoryInput: name
    })
  }

  render() {
    const { categoryInput } = this.state;
    let instruments = this.props.instruments.filter(instrument => {
      if (this.state.categoryInput) return instrument.type.match(this.state.categoryInput)
      else return instrument.name.match(this.state.input)
    })

    return (
      <React.Fragment>
        <Header as="h1" textAlign="left" style={{marginLeft: '17px'}}>Instruments For Sale</Header>
        <Grid columns="equal" padded>
          <Grid.Column width={3}>
            <Menu vertical id="sidebar">
              <Menu.Item name="" active={categoryInput === ''} onClick={this.handleClick}>
                All Instruments
              </Menu.Item>
              <Menu.Item name="Keyboard" active={categoryInput === 'Keyboard'} onClick={this.handleClick}>Keyboard
              </Menu.Item>
              <Menu.Item name="String" active={categoryInput === 'String'} onClick={this.handleClick}>
                String
              </Menu.Item>
              <Menu.Item name="Woodwind" active={categoryInput === 'Woodwind'} onClick={this.handleClick}>
                Woodwind
              </Menu.Item>
              <Menu.Item name="Percussion" active={categoryInput === 'Percussion'} onClick={this.handleClick}>
                Percussion
              </Menu.Item>
              <Menu.Item name="Brass" active={categoryInput === 'Brass'} onClick={this.handleClick}>
                Brass
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search instruments" onChange={this.handleChange} />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column >
            <Container textAlign="center">
              <Grid columns={4} >
                {Array.isArray(instruments) && instruments.map(instrument => (
                    <Instrument instrument={instrument} key={instrument.id} />
                )
                )}
              </Grid>
            </Container>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}
