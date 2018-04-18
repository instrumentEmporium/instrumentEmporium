import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Header, Icon } from 'semantic-ui-react'

export default class Instrument extends React.Component {
  componentDidMount() {
    if (this.props.loadInstrument) {
      this.props.loadInstrument();
    }
  }

  render() {
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
        <p>Rating:
            <Icon name="star" color="grey" />
        </p>
      </Grid.Column>
    )
  }
}
