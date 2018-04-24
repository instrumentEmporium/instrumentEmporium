import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Icon, Card, Container, Button, Dropdown, Header } from 'semantic-ui-react';

const options = [1, 2, 3, 4, 5]

export default class Cart extends React.Component {
  componentDidMount() {
    if (this.props.loadInstruments) {
      this.props.loadInstruments();
    }
    if (this.props.loadCart) {
      this.props.loadCart(this.props.cart.id);
    }
  }

  render() {
    const { cart } = this.props;
    return (
      <Container id="cart">
        <Header as="h2" textAlign="center" style={{ marginTop: '10px' }}>Your Cart</Header>
        <Grid>
          <Grid.Row textAlign="center">
            {(cart.items && cart.items.length ?
              (<Container>
                {cart.items.map(item => {
                  let singleItem = this.props.instruments.find(instrument => instrument.id === +item.id)
                  return (
                    <Grid celled key={item.id}>
                      <Grid.Column width={3}>
                        <Image src={singleItem && singleItem.imageUrl} />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Grid.Row>
                          <h3>Name: {singleItem && singleItem.name}</h3>
                        </Grid.Row>
                        <Grid.Row>
                          <h3>Price: ${singleItem && singleItem.price}</h3>
                        </Grid.Row>
                        <Grid.Row>
                          <h3>Quantity:
                              <select
                                defaultValue={item.quantity}
                                onChange={(event) => {
                                let currentItem = {
                                  id: +item.id, price: +singleItem.price, quantity: +event.target.value
                                }
                                this.props.editCart(currentItem, cart)
                              }}>
                              {options.map(number => {
                                return <option key={number} value={number} >{number}</option>
                              })}
                            </select></h3>
                        </Grid.Row>
                        <Grid.Row>
                          <Button animated color="red" size="small" onClick={() => this.props.removeFromCart(singleItem, cart)}>
                            <Button.Content visible>Remove from Cart</Button.Content>
                            <Button.Content hidden>
                              <Icon name="remove circle" size="large" />
                            </Button.Content>
                          </Button>
                        </Grid.Row>
                      </Grid.Column>
                    </Grid>
                  )
                })}
                <Header as="h2"> Total:</Header>
                <Button.Group widths={5}>
                  <Button as={Link} to="/instruments" color="yellow" size="large">
                    Take me back to the shop
                      </Button>
                  <Button.Or />
                  <Button as={Link} to={`/carts/${cart.id}/checkout`} color="teal" size="large">
                    Continue to Checkout
                      </Button>
                </Button.Group>
              </Container>
              ) :
              <Container>
                <h1>Your shopping cart is empty</h1>
                <Button as={Link} to="/instruments" color="yellow" size="large">
                  Take me back to the shop
                  </Button>
              </Container>
            )}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
