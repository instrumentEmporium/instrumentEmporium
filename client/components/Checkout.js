import React from 'react';
import { Button, Header, Container, List, Image, Form, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { shippingAddress } from '../store';

export class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.user.firstName || '',
      lastName: this.props.user.lastName || '',
      phoneNumber: this.props.user.phoneNumber || '',
      addressLine1: this.props.user.addressLine1 || '',
      addressLine2: this.props.user.addressLine2 || '',
      city: this.props.user.city || '',
      state: this.props.user.state || '',
      zip: this.props.user.zip || ''
    }
  }

  componentDidMount () {
      this.props.loadInstruments();
      if (this.props.cart.id) {
        this.props.loadCart(this.props.cart.Id);
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.shippingAddressThunk(this.props.user.id, this.state);
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
        <Form id="checkoutForm" onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Field label="First name" placeholder="First Name" width={5} control="input" onChange={this.handleInputChange} name="firstName" value={this.state.firstName} />
            <Form.Field label="Last Name" placeholder="Last Name" width={5} control="input" onChange={this.handleInputChange} name="lastName" value={this.state.lastName} />
            <Form.Field label="Phone Number" placeholder="Phone Number" width={4} control="input" onChange={this.handleInputChange} name="phoneNumber" value={this.state.phoneNumber} />
          </Form.Group>
          <Form.Group>
            <Form.Field label="Address Line 1" placeholder="Address Line 1" width={8} control="input" onChange={this.handleInputChange} name="addressLine1" value={this.state.addressLine1} />
            <Form.Field label="Address Line 2"  placeholder="Address Line 2" width={6} control="input" onChange={this.handleInputChange} name="addressLine2" value={this.state.addressLine2} />
            </Form.Group>
            <Form.Group>
            <Form.Field label="City" placeholder="City" width={8} control="input" onChange={this.handleInputChange} name="city" value={this.state.city} />
            <Form.Field label="State" placeholder="State" width={2} control="input" onChange={this.handleInputChange} name="state" value={this.state.state} />
            <Form.Field label="Zip Code" placeholder="Zip Code" width={4} control="input" onChange={this.handleInputChange} name="zip" value={this.state.zip} />
          </Form.Group>
          <Button size="large" type='submit'>Place Your Order</Button>
      </Form>
      </Container>
      </div>
    )
  }
}

// CONTAINER

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    shippingAddressThunk (id, user) {
      dispatch(shippingAddress(id, user))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
