import React from 'react';
import { Link } from 'react-router-dom';
// import SingleInstrument from './SingleInstrument';
import { Icon, Button, Container, Header, Image } from 'semantic-ui-react';
import Carousel from 'react-responsive-carousel';
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
    return (
      <div>
      <Container
       text textAlign="center">
       <Header
          as="h1"
          content="Welcome to the Instrument Emporium!"
          style={{
            fontSize: '3em',
            fontWeight: 'normal',
            marginBottom: '100px',
            marginTop: '3em',
          }}
        />
        <Button as={ Link } to="/instruments" color="yellow" size="huge">
          Explore our products
          <Icon name="right arrow" />
        </Button>
    </Container>
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
