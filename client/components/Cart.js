import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Icon, Rating, Card, Container, Button } from 'semantic-ui-react';
import SingleInstrument from './SingleInstrument';


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
            <Container id='cart'>
                <Grid>
                    <Grid.Row>
                        <div textAlign='center' margin='2em'>
                            <h1>Your Cart</h1>
                        </div>
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                    {(!cart.length ?
                      <div>
                          <h1>Your shopping cart is empty</h1>
                      </div> :
                    cart.map(item => {
                      let singleItem = this.props.instruments.find(instrument => instrument.id === +item[0].slice(3))
                      return (
                        <div>
                          <h1>{singleItem.name}</h1>
                          <span>{singleItem.price}</span>
                          <img src={singleItem.imageUrl}/>
                        </div>
                      )
                    }))}
                    </Grid.Row>
                    <Button as={Link} to="/instruments" color="blue" size="large">
                    Take me back to the shop!
                </Button>
                </Grid>
            </Container>

        )
    }
}
