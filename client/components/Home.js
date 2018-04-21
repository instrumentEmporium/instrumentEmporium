import React from 'react';
import { Link } from 'react-router-dom';
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
        <section id="carousel">
          <div id="carousel-text">
            <h1>Welcome to the Instrument Emporium!</h1>
            <Button as={Link} to="/instruments" color="yellow" size="huge">
              Explore our products
              <Icon name='right arrow' />
            </Button>
          </div>
          <img className="carousel-image"
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Steinway_grand_piano_strings_and_keys.JPG" />
          <img className="carousel-image hidden" src="http://www.schantzorgan.com/data1/images/schantzorganslide02.jpg" />
        </section>
        <Grid textAlign='center'>
          <Grid.Row>
            <h1>Top Rated Products</h1>
          </Grid.Row>
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
