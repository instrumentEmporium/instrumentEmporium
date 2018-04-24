import React from 'react';
import { Link } from 'react-router-dom';
import AudioSample from './AudioSample';
import  ReviewsContainer from '../containers/ReviewsContainer';
import { Dropdown, Image, Grid, Icon, Button, Rating } from 'semantic-ui-react';

const options = [1, 2, 3, 4, 5]

export default class SingleInstrument extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (this.props.loadInstrument) {
      this.props.loadInstrument();
    }
    this.props.loadCart();
  }

  handleChange(evt) {
    this.setState({ quantity: evt.target.value });
  }

  checkCart(items, instId) {
    if (!items) return false;
    if (items.findIndex(item =>
      item.id === instId
    ) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { singleInstrument, cart } = this.props;
    console.log(singleInstrument)
    return (
      <div>
        <Button
          as={Link}
          to={'/instruments'}
          style={{
            marginLeft: '4em',
            marginTop: '2em'
          }}>
          <Icon name="left arrow" />Back to all instruments
            </Button>
        <Grid style={{
          margin: '2em'
        }}>
          <Grid celled>
            <Grid.Column width={3}>
              <Image src={singleInstrument && singleInstrument.imageUrl} />
              <AudioSample instrument={singleInstrument} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row>
                <h3>Name: {singleInstrument && singleInstrument.name}</h3>
              </Grid.Row>
              <Grid.Row>
                <h3>Price: ${singleInstrument && singleInstrument.price}</h3>
              </Grid.Row>
              <Grid.Row>
                <h3>Rating:
                        <Rating icon="star" maxRating={5} rating={singleInstrument.rating} disabled />
                </h3>
              </Grid.Row>
              <Grid.Row>
                <h3>Quantity:
                  <select onChange={this.handleChange} defaultValue={1}>
                    {options.map(number => {
                      return <option key={number} value={number}>{number}</option>
                    })}
                  </select>
                  {
                    this.checkCart(cart.items, +singleInstrument.id) ?
                      <Button
                        color='orange'
                        content='Edit quantity'
                        onClick={() => {
                          let currentItem = {
                            id: +singleInstrument.id, price: +singleInstrument.price, quantity: +this.state.quantity
                          }
                          cart.items && cart.id ? this.props.editCart(currentItem, cart) : this.props.createCart(currentItem)
                        }} /> :
                      <Button onClick={() => {
                        let currentItem = {
                          id: +singleInstrument.id, price: +singleInstrument.price, quantity: +this.state.quantity
                        }
                        console.log(cart)
                        cart.items && cart.id ? this.props.addToCart(currentItem, cart) : this.props.createCart(currentItem)
                      }}>
                        <Icon name="add to cart" size="large" color="teal" />
                      </Button>
                  }
                </h3>
              </Grid.Row>
            </Grid.Column>
          </Grid>
            <ReviewsContainer />
        </Grid>
      </div>
    )
  }
}
