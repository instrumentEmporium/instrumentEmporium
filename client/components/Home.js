import React from 'react';
import { Link } from 'react-router-dom';
// import SingleInstrument from './SingleInstrument';
import { Icon, Button, Container, Header, Image, Grid } from 'semantic-ui-react';
import Instrument from './Instrument';


export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: 1
    }
  }

  componentDidMount() {
    if (this.props.loadTopFive) {
      this.props.loadTopFive();
    }
  }

  render() {
    const { topFive } = this.props;
    let index=this.state.index;
    console.log(index)
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
          <img className='carousel-image' src="/images/background" />
          <img className={`carousel-image ${(index%3 === 2) ? '' : 'hidden'}`} src="/images/background2" />
          <img className={`carousel-image ${(index%3 === 0) ? '' : 'hidden'}`} src='/images/background3' />
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
