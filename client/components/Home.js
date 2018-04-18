import React from 'react';
import { Link } from 'react-router-dom';
// import SingleInstrument from './SingleInstrument';
import { Icon, Button, Container, Header, Image, Grid } from 'semantic-ui-react';
import Instrument from './Instrument';


export default class Home extends React.Component {
  componentDidMount() {
    if (this.props.loadTopFive) {
      this.props.loadTopFive();
    }
  }

  render() {
    const { topFive } = this.props;
    return (
      <div >
        <Container
          className='homeLanding'
          style={{
            marginBottom: '100px',
            width: '100%'
          }}
          text textAlign="center">
          <Header
            as='h1'
            content="Welcome to the Instrument Emporium!"
            style={{
              fontSize: '3em',
              fontWeight: 'normal',
              color: 'white',
              marginBottom: '100px',
            }}
          >
          </Header>
          <Button as={Link} to="/instruments" color="yellow" size="huge">
            Explore our products
          <Icon name='right arrow' />
          </Button>
        </Container>
        <Grid textAlign='center'>
          {
            topFive && topFive.map(instrument => {
              return (
                <Grid.Column width={3} key={instrument.id}>
                  <Instrument instrument={instrument} />
                </Grid.Column>
              )
            })
          }
        </Grid>
      </div>
    )
  }
}
