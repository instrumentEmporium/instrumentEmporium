import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class Stripe extends React.Component {
  onToken = (token) => {
    return axios.post('/api/orders/save-stripe-token', ({token: token, price: this.props.totalPrice}))
      .then( () => {
        alert("THANK YOU FOR YOUR MONEY")
      })
      .catch(err => console.log(err))
    };

  render() {
    return (

      <StripeCheckout
  name="Instrument Emporium"
  description="We love money"
  ComponentClass="div"
  panelLabel="Give Money"
  amount={this.props.totalPrice * 100} // cents
  currency="USD"
  stripeKey="pk_test_uRCchsBotS4gxt2pHTfFCKGE"
  locale="en"
  email="support@instrumentEmporium.com"
  billingAddress={true}
  zipCode={false}
  token={this.onToken}
  opened={this.onOpened}
  closed={this.props.handleSubmit}
  reconfigureOnUpdate={false}
  />
    )
  }
}
