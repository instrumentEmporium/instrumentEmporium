import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Header, Icon, Rating } from 'semantic-ui-react'

export default class Instrument extends React.Component {
  componentDidMount() {
    if (this.props.loadInstrument) {
      this.props.loadInstrument();
    }
  }

  render() {
    console.log(this.props)
    const { instrument } = this.props;
    return (
      <Grid.Column>
        <Header as="h3">
          <Link to={`/instruments/${instrument.id}`}>
            {instrument.name}
          </Link>
        </Header>
        <Image src={instrument.imageUrl} size="small" rounded bordered centered />
        Price: ${instrument.price}
        <div>Rating:
            <Rating icon="star" defaultRating={instrument.rating} maxRating={5} disabled />
        </div>
      </Grid.Column>
    )
  }
}
