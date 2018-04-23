import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Header, Icon, Rating, Card } from 'semantic-ui-react'

export default class Instrument extends React.Component {
  componentDidMount() {
    if (this.props.loadInstrument) {
      this.props.loadInstrument();
    }
  }

  render() {
    const { instrument } = this.props;

    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Card>
          <Link to={`/instruments/${instrument.id}`}>
            <Header as="h3">
              {instrument.name}
            </Header>
            <Image src={instrument.imageUrl} width={'160px'} height={'160px'} rounded bordered centered />
            Price: ${instrument.price}
            <div>Rating:
            <Rating icon="star" defaultRating={instrument.rating} maxRating={5} disabled />
            </div>
          </Link>
        </Card>
      </Grid.Column>
    )
  }
}
