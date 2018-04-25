import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, Container, Header, Image, Grid } from 'semantic-ui-react';
import Instrument from './Instrument';
import Carousel from './ImageCarousel';


export default class Home extends React.Component {
  constructor(props){
    super(props);
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
    return (
      <div >
        <Carousel />
        <Grid textAlign='center'>
          <Grid.Row>
            <h1>Top Rated Products</h1>
          </Grid.Row>
          {
            topFive && topFive.map(instrument => {
              return (
                <Grid.Column id='products' width={3} key={instrument.id}>
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
