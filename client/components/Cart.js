import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Icon, Card, Container, Button, Dropdown, Header } from 'semantic-ui-react';


export default class Cart extends React.Component {
    componentDidMount() {
        if (this.props.loadCart) {
            this.props.loadCart();
        }
        if (this.props.loadInstruments) {
          this.props.loadInstruments();
        }
    }

    render() {
      const { cart } = this.props;
        return (
            <Container id="cart">
            <Header as="h2" textAlign="center" style={{marginTop: '10px'}}>Your Cart</Header>
              <Grid>
                <Grid.Row textAlign="center">
                  {(cart && cart.length ?
                    (cart.map(item => {
                      item = JSON.parse(item);
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
                            <h3>Quantity:{
                            item.quantity}</h3>
                          </Grid.Row>
                        </Grid.Column>
                      </Grid>
                    )
                    })) :
                    <h1>Your shopping cart is empty</h1>
                  )}
                    </Grid.Row>
                    <Button.Group widths={5}>
                      <Button as={Link} to="/instruments" color="yellow" size="large">
                      Take me back to the shop
                      </Button>
                      <Button.Or />
                      <Button color="teal" size="large">Continue to Checkout</Button>
                    </Button.Group>

                </Grid>
            </Container>

        )
    }
}
