import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Header, Card } from 'semantic-ui-react'

export default class Order extends React.Component {
  componentDidMount() {
    if (this.props.loadOrder) {
      this.props.loadOrder();
    }
  }

  render() {
    const { order } = this.props;
    return (
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card>
            <Link to={`/orders/${order.id}`}>
              <Header as="h3">
                {order.id} {/* Change to user name, once associated */}
              </Header>
              <h3>Status: {order.fulfilled}</h3>
              <h3>Items:
              {/*Array.isArray(order.items) && order.items.map(instrument => (
              /* <Instrument instrument={instrument} key={instrument.id} />)
              )*/}</h3>
              <h3>Name: {order.firstName}{order.lastName}</h3>
              <h3>Phone#: {order.phoneNumber}</h3>
              <h3>Address1:{order.addressLine1}</h3>
              <h3>Address2:{order.addressLine2}</h3>
              <h3>City:{order.city}</h3>
              <h3>State: {order.state}</h3>
              <h3>Zip:{order.zip}</h3>
              <h3>UserId: {order.userId}</h3>
            </Link>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
