import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Icon, Rating, Card, Container, Button } from 'semantic-ui-react'

export default class Instrument extends React.Component {
    componentDidMount() {
        if (this.props.loadInstrument) {
            this.props.loadInstrument();
        }
    }

    render() {
        return (
            <Container id='cart'>
                <Grid>
                    <Grid.Row>
                        <div textAlign='center' margin='2em'>
                            <h1>Your Cart</h1>
                        </div>
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                        <div>
                            <h1>Your shopping cart is empty</h1>
                            <Button as={Link} to="/instruments" color="blue" size="large">
                                Take me back to the shop!
                            </Button>
                        </div>
                        {/* Take array of cart items and maps them out as grid rows with price, quantity. 
                        Use ternary to display either items in cart or empty cart message */}
                    </Grid.Row>
                </Grid>
            </Container>

        )
    }
}