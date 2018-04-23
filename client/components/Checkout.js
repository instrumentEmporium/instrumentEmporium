import React from 'react';
import { Header, Container, List, Image, Form, Divider } from 'semantic-ui-react';

export default class Checkout extends React.Component {
  componentDidMount () {
      this.props.loadInstruments();
      if (this.props.cart.id) {
        this.props.loadCart(this.props.cart.Id);
      }
  }

  render() {
    const { cart, instruments } = this.props;
    return (
      <div>
        <Header as="h1" textAlign="center" style={{padding: '20px'}}>Checkout</Header>
        <Container>
          <Header as="h2"> Items in cart: </Header>
          <List divided verticalAlign="middle" >
          {(instruments && cart.items) && cart.items.map(item => {
              let foundInstrument = instruments.find(instrument => instrument.id === item.id)
              return (
                  <List.Item key={item.id}>
                    <Image src={foundInstrument.imageUrl} width={'100px'} height={'100px'} rounded centered />
                    <List.Content>
                      <List.Header as="h3"> {foundInstrument.name}</List.Header>
                      <List.Content> Quantity: {item.quantity} </List.Content>
                      <List.Content> Total Price: ${item.price * item.quantity}</List.Content>
                    </List.Content>
                  </List.Item>
                )
              })
            }
            </List>
        </Container>
        <Header as="h2" textAlign="center">Total Price: ${
          cart.items && cart.items.reduce((total, currentItem) => total + currentItem.price, 0)
        } </Header>
        <Divider />
        <Header as="h3" textAlign="center">Please enter your shipping details below:</Header>
        <Container textAlign="center">
        <Form id="checkoutForm">
          <Form.Group >
            <Form.Field label="First name" placeholder="First Name" width={5} control="input" />
            <Form.Field label="Last Name" placeholder="Last Name" width={5} control="input" />
            <Form.Field label="Phone Number" placeholder="Phone Number" width={4} control="input" />
          </Form.Group>
          <Form.Group>
            <Form.Field label="Address Line 1" placeholder="Address Line 1" width={8} control="input" />
            <Form.Field label="Address Line 2"  placeholder="Address Line 2" width={6} control="input" />
            </Form.Group>
            <Form.Group>
            <Form.Field label="City" placeholder="City" width={8} control="input" />
            <Form.Field label="State" placeholder="State" width={2} control="input" />
            <Form.Field label="Zip Code" placeholder="Zip Code" width={4} control="input" />
          </Form.Group>
      </Form>
      </Container>
      </div>
    )
  }
}

