import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Icon, Rating, Card, Container } from 'semantic-ui-react'

export default class Instrument extends React.Component {
    componentDidMount() {
        if (this.props.loadInstrument) {
            this.props.loadInstrument();
        }
    }

    render() {
        return (
            <Container width='100%'>
                <Grid>
                    <Grid.Row textAlign='center'>
                        <h1>Your Cart</h1>
                    </Grid.Row>
                </Grid>
            </Container>

        )
    }
}